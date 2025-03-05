<template>
  <div>
    <div ref="mapContainer" style="width: 100%; height: 600px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, reactive, onUnmounted, computed } from "vue";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import debounce from "@/utils/debounce";

const TERRAIN_EXAGGERATION = 1.5;

const ToolTypes = ["linepointer", "mouse", "rectangle", "pindropper"] as const;
type ToolType = (typeof ToolTypes)[number];

const ItemTypes = [
  "city",
  "province",
  "territory",
  "geo-area",
  "river",
  "sea",
  "point",
] as const;
type ItemType = (typeof ItemTypes)[number];

export type MapItem = {
  key: string;
  label?: string;
  type: ItemType | ToolType;
  importance?: number;
  coordinates: Array<{ lat: number; lng: number }>;
};

type Coordinates = { lat: number; lng: number };
type Bounds = [Coordinates, Coordinates];

const props = defineProps<{
  mapItems: Array<MapItem>;
  mapBoundary?: Bounds;
  customMapBackground?: string;
}>();

const mapContainer = ref<HTMLElement | null>(null);
let map: maplibregl.Map;
const mapIsReady = ref(false);

const draftState = reactive({
  isDrawing: false,
  path: [] as Array<Coordinates>,
  activeTool: null as any | null,
  onChange: null as ((path: Array<Coordinates>) => void) | null,
  onEnd: null as ((save: boolean, path: Array<Coordinates>) => void) | null,
});

const focusedItemKeys = ref<Set<string>>(new Set()); // Change to Set of focused item keys

function setupMapEventListeners() {
  if (!map) return;

  map.on("click", handleMapClick);
  map.on("mousedown", handleMapMouseDown);
  map.on("mousemove", handleMapMouseMove);
  map.on("mouseup", handleMapMouseUp);
  window.addEventListener("keydown", handleKeyDown);
}

function destroyMapEventListeners() {
  if (!map) return;

  map.off("click", handleMapClick);
  map.off("mousedown", handleMapMouseDown);
  map.off("mousemove", handleMapMouseMove);
  map.off("mouseup", handleMapMouseUp);
  window.removeEventListener("keydown", handleKeyDown);
}

function handleMapClick(e: maplibregl.MapMouseEvent) {
  if (draftState.activeTool) {
    draftState.activeTool.mapClick(e);
  } else {
    handleMapItemClick(e);
  }
}

function handleMapMouseDown(e: maplibregl.MapMouseEvent) {
  if (draftState.activeTool) {
    draftState.activeTool.mapMouseDown(e);
  }
}

function handleMapMouseMove(e: maplibregl.MapMouseEvent) {
  if (draftState.activeTool) {
    draftState.activeTool.mapMouseMove(e);
  }
}

function handleMapMouseUp(e: maplibregl.MapMouseEvent) {
  if (draftState.activeTool) {
    draftState.activeTool.mapMouseUp(e);
  }
}

function handleKeyDown(e: KeyboardEvent) {
  if (draftState.activeTool) {
    if (e.key === "Escape") {
      draftState.activeTool.esc();
    } else if (e.key === "Enter") {
      draftState.activeTool.enter();
    }
  }
}

function handleMapItemClick(e: maplibregl.MapMouseEvent) {
  const features = map.queryRenderedFeatures(e.point);
  const mapItemFeature = features.find(
    (f) => f.layer.id.endsWith("-label") || f.layer.id.endsWith("-circle")
  );
  // Unfocus all items
  focusedItemKeys.value.forEach((key) => unfocusMapItem(key));
  if (mapItemFeature) {
    const itemKey = mapItemFeature.layer.id.replace(/-(label|circle)$/, "");
    focusMapItem(itemKey);
  }
}

const getEventCoordinates = (e: maplibregl.MapMouseEvent) => e.lngLat;

abstract class DrawingTool {
  protected path: Array<Coordinates>;
  protected map: maplibregl.Map;
  protected painter?: Painter;
  protected onChange: (path: Array<Coordinates>) => void;
  protected tempPoint: Coordinates | null = null; // Add tempPoint property

  constructor(
    map: maplibregl.Map,
    path: Array<Coordinates>,
    onChange: (path: Array<Coordinates>) => void,
    painter?: Painter
  ) {
    this.map = map;
    this.painter = painter;
    this.path = path;
    this.onChange = onChange;
  }

  public init() {
    // Initialize the tool, e.g., add event listeners
    this.painter?.create();
  }

  public destroy() {
    // Clean up the tool, e.g., remove event listeners
    this.painter?.remove();
  }

  protected addPointToPath(coordinates: Coordinates) {
    this.path.push(coordinates);
    this.painter?.updateGeometry(this.path);
    this.onChange(this.path);
  }

  protected updatePath(path: Array<Coordinates>) {
    this.path = path;
    this.painter?.updateGeometry(this.path);
    this.onChange(this.path);
  }

  protected updateTempPoint(coordinates: Coordinates) {
    this.tempPoint = coordinates;
  }

  protected disableMapPanning() {
    this.map.getCanvas().style.cursor = "grabbing";
    this.map.dragPan.disable(); // Disable map panning
  }

  protected enableMapPanning() {
    this.map.getCanvas().style.cursor = "inherit";
    this.map.dragPan.enable(); // Re-enable map panning
  }

  ////////////////////
  // EVENT HANDLERS //
  ////////////////////
  // These do nothing by default, but can be overridden by subclasses
  protected mapClick(e: maplibregl.MapMouseEvent) {}
  protected mapMouseDown(e: maplibregl.MapMouseEvent) {}
  protected mapMouseMove(e: maplibregl.MapMouseEvent) {
    this.updateTempPoint(getEventCoordinates(e)); // Update tempPoint on mouse move
  }
  protected mapMouseUp(e: maplibregl.MapMouseEvent) {}
  protected esc() {}
  protected enter() {}
}

class LinePointer extends DrawingTool {
  constructor(
    map: maplibregl.Map,
    path: Array<Coordinates>,
    onChange: (path: Array<Coordinates>) => void
  ) {
    const item: MapItem = {
      key: "draft",
      type: "linepointer",
      coordinates: path,
    };
    const painter = getPainter(map, item);
    super(map, path, onChange, painter);
  }

  protected mapClick(e: maplibregl.MapMouseEvent) {
    this.addPointToPath(getEventCoordinates(e));
  }

  protected mapMouseMove(e: maplibregl.MapMouseEvent) {
    super.mapMouseMove(e);
    if (this.tempPoint) {
      this.painter!.updateGeometry([...this.path, this.tempPoint]);
    }
  }

  protected enter() {
    exitTool();
  }
}

class Mouse extends DrawingTool {
  constructor(
    map: maplibregl.Map,
    path: Array<Coordinates>,
    onChange: (path: Array<Coordinates>) => void
  ) {
    const item: MapItem = {
      key: "draft",
      type: "mouse",
      coordinates: path,
    };
    const painter = getPainter(map, item);
    super(map, path, onChange, painter);
  }

  private draggingIndex = null as number | null;
  private dragging = false;
  private debounceDrag = debounce(this.updateDraggingPoint.bind(this), 50, {
    doFirst: true,
    allowInterval: true,
  });

  public init() {
    super.init();
    this.map.on("mousedown", "draft-points", this.onPointMouseDown.bind(this));
  }

  public destroy() {
    this.enableMapPanning();
    this.map.off("mousedown", "draft-points", this.onPointMouseDown.bind(this));
    this.map.off("mousemove", this.mapMouseMove.bind(this));
    this.map.off("mouseup", this.mapMouseUp.bind(this));
    super.destroy();
  }

  private onPointMouseDown(e: maplibregl.MapMouseEvent) {
    // Logic to detect dragging of circle handles and init drag state
    const features = this.map.queryRenderedFeatures(e.point);
    const pointFeature = features.find((f) => f.layer.id === "draft-points");
    if (pointFeature) {
      this.map.on("mousemove", this.mapMouseMove.bind(this));
      this.map.on("mouseup", this.mapMouseUp.bind(this));

      this.dragging = true;
      this.draggingIndex = pointFeature.properties.index;
      this.disableMapPanning();
    }
  }

  protected mapMouseMove(e: maplibregl.MapMouseEvent) {
    this.debounceDrag(e);
  }
  protected updateDraggingPoint(e: maplibregl.MapMouseEvent) {
    // logic to update dragged point
    if (this.dragging) {
      const coordinates = getEventCoordinates(e);
      this.path[this.draggingIndex!] = coordinates;
      this.painter!.updateGeometry(this.path);
    }
  }

  protected mapMouseUp(e: maplibregl.MapMouseEvent) {
    // Logic to finalize dragging of circle handles
    this.updateDraggingPoint(e);
    this.dragging = false;
    this.draggingIndex = null;
    this.enableMapPanning();
    this.map.off("mousemove", this.mapMouseMove.bind(this));
    this.map.off("mouseup", this.mapMouseUp.bind(this));
  }

  protected enter() {
    endDrawing(true);
  }

  protected esc() {
    endDrawing(false);
  }
}

class Rectangle extends DrawingTool {
  private startPoint: Coordinates | null = null;

  constructor(
    map: maplibregl.Map,
    path: Array<Coordinates>,
    onChange: (path: Array<Coordinates>) => void
  ) {
    const item: MapItem = {
      key: "draft",
      type: "rectangle",
      coordinates: path,
    };
    const painter = getPainter(map, item);
    super(map, path, onChange, painter);
  }

  destroy() {
    super.destroy();
    this.startPoint = null;
    this.enableMapPanning();
  }

  protected mapMouseDown(e: maplibregl.MapMouseEvent) {
    this.startPoint = getEventCoordinates(e);
    this.disableMapPanning();
  }

  protected mapMouseMove(e: maplibregl.MapMouseEvent) {
    if (this.startPoint) {
      const endPoint = getEventCoordinates(e);
      const newPath = this.calculateRectanglePath(this.startPoint, endPoint);
      this.updatePath(newPath);
    }
  }

  protected mapMouseUp(e: maplibregl.MapMouseEvent) {
    this.startPoint = null;
    exitTool();
  }

  protected enter() {}

  private calculateRectanglePath(
    start: Coordinates,
    end: Coordinates
  ): Array<Coordinates> {
    return [
      start,
      { lat: start.lat, lng: end.lng },
      end,
      { lat: end.lat, lng: start.lng },
    ];
  }
}

class PinDropper extends DrawingTool {
  private marker: maplibregl.Marker | null = null;

  constructor(
    map: maplibregl.Map,
    path: Array<Coordinates>,
    onChange: (path: Array<Coordinates>) => void
  ) {
    super(map, path, onChange);
  }

  public destroy(): void {
    super.destroy();
    if (this.marker) {
      this.marker.remove();
      this.marker = null; // Ensure marker is set to null after removal
    }
  }

  protected mapClick(e: maplibregl.MapMouseEvent) {
    const coordinates = getEventCoordinates(e);
    this.addPointToPath(coordinates);
    this.placeMarker(coordinates);
  }

  private placeMarker(coordinates: Coordinates) {
    if (this.marker) {
      this.marker.remove();
    }
    this.marker = new maplibregl.Marker()
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(this.map);
  }

  protected enter() {
    endDrawing(true);
  }
}

function updateDraftPath(path: Array<Coordinates>) {
  draftState.path = path;
  // draftState.onChange?.call(null, path);
}

const Tools = {
  linepointer: LinePointer,
  mouse: Mouse,
  rectangle: Rectangle,
  pindropper: PinDropper, // Add PinDropper to Tools
};

function startDrawing({
  path = [] as Array<Coordinates>,
  toolType,
  // onChange = (path) => {},
  onEnd = (save, path) => {},
}) {
  if (draftState.isDrawing) {
    return;
  }
  draftState.isDrawing = true;
  draftState.path = path;
  // draftState.onChange = onChange;
  draftState.onEnd = onEnd;
  enterNewTool(toolType);
}

function endDrawing(save: boolean = true) {
  if (draftState.activeTool) {
    draftState.activeTool.destroy();
  }
  if (save) {
    draftState.onEnd?.call(null, save, Array.from(draftState.path));
  }

  draftState.isDrawing = false;
  draftState.onChange = null;
  draftState.onEnd = null;
  draftState.path = [];
  draftState.activeTool = null;
}

function enterNewTool(toolType: ToolType) {
  if (draftState.activeTool) {
    draftState.activeTool.destroy();
  }
  draftState.activeTool = new Tools[toolType](
    map,
    draftState.path,
    updateDraftPath
  );
  draftState.activeTool.init();
}

/**
 * Swaps out the current tool for the mouse, which is the default.
 * Allows the user to modify the shape they have drawn with the previous tool before submitting it.
 */
function exitTool() {
  enterNewTool("mouse");
}

function closePolygon(
  coordinates: Readonly<Array<Coordinates>>
): Array<Coordinates> {
  const newCoordinates = Array.from(coordinates);
  if (coordinates.length < 3) return newCoordinates;
  const first = newCoordinates[0];
  const last = newCoordinates[newCoordinates.length - 1];
  if (first.lat !== last.lat || first.lng !== last.lng) {
    newCoordinates.push(first);
  }
  return newCoordinates;
}

abstract class Painter {
  protected map: maplibregl.Map;
  protected item: MapItem;
  protected isFocused = false;

  constructor(map: maplibregl.Map, item: MapItem) {
    this.map = map;
    this.item = item;
  }

  abstract getSources(): any[];
  abstract getLayers(): any[];

  get path() {
    return this.item.coordinates;
  }

  create() {
	console.log("Creating painter for item", this.item.key);
    const sources = this.getSources();
    const layers = this.getLayers();
    sources.forEach((source) =>
      this.map.addSource(source.id, source.definition)
    );
    layers.forEach((layer) => this.map.addLayer(layer));
  }

  updateGeometry(newCoordinates: Array<Coordinates>) {
    this.item.coordinates = newCoordinates;
    const newSources = this.getSources();
    newSources.forEach((newSource) => {
      const mapSource = this.map.getSource(newSource.id) as any;
      if (mapSource) {
        mapSource.setData(newSource.definition.data);
      }
    });
  }

  updateStyles() {
    const layers = this.getLayers();
    layers.forEach((layer) => {
      const mapLayer = this.map.getLayer(layer.id);
      if (mapLayer) {
        for (const key in layer.paint) {
          mapLayer.setPaintProperty(key, layer.paint[key]);
        }
      }
    });
  }

  setFocus(focused: boolean) {
    this.isFocused = focused;
    this.updateStyles();
    if (focused) {
      this.onFocus();
    } else {
      this.onBlur();
    }
  }
  protected onFocus() {}
  protected onBlur() {}

  remove() {
    const layers = this.getLayers();
    layers.forEach((layer) => {
      if (this.map.getLayer(layer.id)) this.map.removeLayer(layer.id);
    });
    const sources = this.getSources();
    sources.forEach((source) => {
      if (this.map.getSource(source.id)) this.map.removeSource(source.id);
    });
  }
}

class ProvincePainter extends Painter {
getSources() {
	const closedPath = closePolygon(this.item.coordinates);
	const centerPoint = closedPath.reduce(
		(center, point) => {
			center.lat += point.lat;
			center.lng += point.lng;
			return center;
		},
		{ lat: 0, lng: 0 }
	);
	centerPoint.lat /= closedPath.length;
	centerPoint.lng /= closedPath.length;
	return [
		{
			id: this.item.key + "-source",
			definition: {
				type: "geojson",
				data: {
					type: "Feature",
					geometry: {
						type: "Polygon",
						coordinates: [closedPath.map((point) => [point.lng, point.lat])],
					},
					properties: {},
				},
			},
		},
		{
			id: this.item.key + "-center-source",
			definition: {
				type: "geojson",
				data: {
					type: "Feature",
					geometry: {
						type: "Point",
						coordinates: [centerPoint.lng, centerPoint.lat],
					},
					properties: {},
				},
			},
		},
	];
}

  getLayers() {
    return [
      {
        id: this.item.key + "-label",
        type: "symbol",
        source: this.item.key + "-center-source",
        layout: {
          "text-field": this.item.label || "",
          "text-font": ["Noto Sans Regular"],
          "text-size": 18,
          "text-anchor": "center",
        },
        paint: {
          "text-color": "#000000",
          "text-halo-color": "#FFFFFF",
          "text-halo-width": 1,
        },
      },
    ];
  }

  protected onFocus(): void {
    if (this.map.getLayer(this.item.key + "-line")) {
      return;
    }
    this.map.addLayer({
      id: this.item.key + "-line",
      type: "line",
      source: this.item.key + "-source",
      paint: {
        "line-color": "#088",
        "line-width": 2,
      },
    });
  }

  protected onBlur(): void {
    if (this.map.getLayer(this.item.key + "-line")) {
      this.map.removeLayer(this.item.key + "-line");
    }
  }
}

class RiverPainter extends Painter {
  getSources() {
    return [
      {
        id: this.item.key + "-source",
        definition: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: this.item.coordinates.map((point) => [
                point.lng,
                point.lat,
              ]),
            },
            properties: {},
          },
        },
      },
    ];
  }

  getLayers() {
    return [
      {
        id: this.item.key + "-line",
        type: "line",
        source: this.item.key + "-source",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#00AAFF",
          "line-width": 5,
        },
      },
      {
        id: this.item.key + "-label",
        type: "symbol",
        source: this.item.key + "-source",
        layout: {
          "symbol-placement": "line",
          "text-field": this.item.label || "",
          "text-size": 10,
          "text-rotation-alignment": "map",
          "text-font": ["Noto Sans Regular"],
        },
        paint: {
          "text-color": "#0000FF",
        },
      },
    ];
  }
}

class CityPainter extends Painter {
  getSources() {
    return [
      {
        id: this.item.key + "-source",
        definition: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                this.item.coordinates[0].lng,
                this.item.coordinates[0].lat,
              ],
            },
            properties: {},
          },
        },
      },
    ];
  }

  getLayers() {
    return [
      {
        id: this.item.key + "-circle",
        type: "circle",
        source: this.item.key + "-source",
        paint: {
          "circle-radius": 6,
          "circle-color": "rgba(128, 128, 128, 0.5)",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#FFFFFF",
        },
      },
      {
        id: this.item.key + "-label",
        type: "symbol",
        source: this.item.key + "-source",
        layout: {
          "text-field": this.item.label || "",
          "text-font": ["Noto Sans Regular"],
          "text-offset": [1, 0],
          "text-anchor": "left",
        },
        paint: {
          "text-color": "#000000",
          "text-halo-color": "#FFFFFF",
          "text-halo-width": 1,
        },
      },
    ];
  }
}

function dottedLineLayers(sourceId: string) {
  return [
    {
      id: sourceId + "-line-shadow",
      type: "line",
      source: sourceId,
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#000000",
        "line-width": 4,
        "line-opacity": 0.15,
      },
    },
    {
      id: sourceId + "-line",
      type: "line",
      source: sourceId,
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#FFFFFF",
        "line-width": 2,
        "line-dasharray": [2, 2],
      },
    },
  ];
}

class LinePointerPainter extends Painter {
  getSources() {
    return [
      {
        id: this.item.key + "-source",
        definition: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: this.item.coordinates.map((point) => [
                point.lng,
                point.lat,
              ]),
            },
            properties: {},
          },
        },
      },
    ];
  }

  getLayers() {
    return dottedLineLayers(this.item.key + "-source");
  }
}

class MousePainter extends Painter {
  getSources() {
    return [
      {
        id: this.item.key + "-linesource",
        definition: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: this.item.coordinates.map((point) => [
                point.lng,
                point.lat,
              ]),
            },
            properties: {},
          },
        },
      },
      {
        id: this.item.key + "-pointsource",
        definition: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: this.item.coordinates.map((point, index) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [point.lng, point.lat],
              },
              properties: { index },
            })),
          },
        },
      },
    ];
  }

  getLayers() {
    const layers = [
      ...dottedLineLayers(this.item.key + "-linesource"),
      {
        id: this.item.key + "-points",
        type: "circle",
        source: this.item.key + "-pointsource",
        paint: {
          "circle-radius": 5,
          "circle-color": "#FFFFFF",
        },
      },
    ];

    return layers;
  }
}

class RectanglePainter extends Painter {
  getSources() {
    const closedPath = closePolygon(this.item.coordinates);
    return [
      {
        id: this.item.key + "-source",
        definition: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [closedPath.map((point) => [point.lng, point.lat])],
            },
            properties: {},
          },
        },
      },
    ];
  }

  getLayers() {
    return [
      {
        id: this.item.key + "-fill",
        type: "fill",
        source: this.item.key + "-source",
        paint: {
          "fill-color": "#088",
          "fill-opacity": 0.25,
        },
      },
      {
        id: this.item.key + "-line",
        type: "line",
        source: this.item.key + "-source",
        paint: {
          "line-color": "#088",
          "line-width": 2,
        },
      },
    ];
  }
}

// Dictionary of Painter classes
const painterClasses: Partial<
  Record<MapItem["type"], new (map: maplibregl.Map, item: MapItem) => Painter>
> = {
  province: ProvincePainter,
  river: RiverPainter,
  city: CityPainter,
  linepointer: LinePointerPainter,
  mouse: MousePainter,
  rectangle: RectanglePainter,
  // Add more painter classes as needed
};

function getPainter(map: maplibregl.Map, mapItem: MapItem): Painter {
  const PainterClass = painterClasses[mapItem.type];
  if (!PainterClass) {
    throw new Error(`No painter class found for type: ${mapItem.type}`);
  }
  return new PainterClass(map, mapItem);
}

const currentPainters = ref<Map<string, Painter>>(new Map());

/**
 * Fully adds/removes items from the map.
 * If making small changes to an active item, consider animating it instead.
 */
function updatePainters() {
  if (!mapIsReady.value) return;

  // remove old painters
  for (const key of currentPainters.value.keys()) {
    const painter = currentPainters.value.get(key);
    if (painter) {
      painter.remove();
      currentPainters.value.delete(key);
    }
  }

  const itemsByImportance = Array.from(props.mapItems).sort(
	(a, b) => (b.importance || 0) - (a.importance || 0)
  );

  // create new painters
  itemsByImportance.forEach((item) => {
	// For now redraw all to maintain importance order
    // check to see if item has been drawn
    // const hasBeenDrawn = currentPainters.value.has(item.key);
    // if (!hasBeenDrawn) {
      const painter = getPainter(map, item);
      currentPainters.value.set(item.key, painter);
      painter.create();
      painter.setFocus(focusedItemKeys.value.has(item.key)); // Set focus state
    // }
  });
}

function editMapItem(
  key: string,
  onEnd?: (save: boolean, path: Array<Coordinates>) => void
) {
  const painter = currentPainters.value.get(key);
  if (painter) {
    startDrawing({
      path: [...painter.path],
      toolType: "mouse",
      // onChange: updateDraftPath,
      onEnd: (save, path) => {
        if (save) {
          painter.updateGeometry(path);
        }
        onEnd?.call(null, save, path);
      },
    });
  } else {
    console.error(`Painter with key ${key} not found.`);
  }
}

function editBoundary(
  onEnd?: (save: boolean, path: Array<Coordinates>) => void
) {
  startDrawing({
    toolType: "rectangle",
    // onChange: updateDraftPath,
    onEnd: (save, path) => {
      onEnd?.call(null, save, path);
    },
  });
}

function drawFeature(
  type: ItemType,
  onEnd?: (save: boolean, path: Array<Coordinates>) => void
) {
  // map feature type to the tool for drawing them
  const toolMap = {
    city: "pindropper",
    province: "linepointer",
    territory: "linepointer",
    "geo-area": "linepointer",
    river: "linepointer",
    sea: "linepointer",
    point: "pindropper", // Use PinDropper for point
  };
  startDrawing({
    toolType: toolMap[type],
    path: [],
    onEnd: (save, path) => {
      onEnd?.call(null, save, path);
    },
  });
}

function focusMapItem(key: string) {
  focusedItemKeys.value.add(key);
  currentPainters.value.get(key)?.setFocus(true);
}

function unfocusMapItem(key: string) {
  focusedItemKeys.value.delete(key);
  currentPainters.value.get(key)?.setFocus(false);
}

defineExpose({
  editMapItem,
  editBoundary,
  drawFeature, // Expose the new function
  focusMapItem, // Expose the new function
  unfocusMapItem, // Expose the new function
});

onMounted(() => {
  map = new maplibregl.Map({
    container: mapContainer.value as HTMLElement,
    center: [-120, 37.422],
    zoom: 3,
    pitch: props.customMapBackground ? 0 : 50,
    maxPitch: props.customMapBackground ? 0 : 82,
    maxBounds: props.mapBoundary,
    dragRotate: !props.customMapBackground,
  });

  map.setStyle(
    "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    {
      transformStyle: (previousStyle, nextStyle) => {
        if (props.customMapBackground) {
          nextStyle.sources = {};
          nextStyle.layers = [];
        } else {
          const allowedLayers = [
            "background",
            "natural",
            "landcover",
            "water",
            "boundary",
            "country",
          ];
          nextStyle.layers = nextStyle.layers.filter((layer) =>
            allowedLayers.some((l) => layer.id.startsWith(l))
          );

          nextStyle.sources = {
            ...nextStyle.sources,
            terrainSource: {
              type: "raster-dem",
              url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
              tileSize: 256,
            },
            hillshadeSource: {
              type: "raster-dem",
              url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
              tileSize: 256,
            },
          };
          nextStyle.terrain = {
            source: "terrainSource",
            exaggeration: TERRAIN_EXAGGERATION,
          };

          nextStyle.sky = {
            "atmosphere-blend": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              1,
              2,
              0,
            ],
          };

          nextStyle.layers.push({
            id: "hills",
            type: "hillshade",
            source: "hillshadeSource",
            layout: { visibility: "visible" },
            paint: { "hillshade-shadow-color": "#473B24" },
          });
        }
        return nextStyle;
      },
    }
  );

  map.addControl(
    new maplibregl.NavigationControl({
      visualizePitch: !props.customMapBackground,
      showZoom: true,
      showCompass: !props.customMapBackground,
    })
  );

  if (!props.customMapBackground) {
    map.addControl(
      new maplibregl.TerrainControl({
        source: "terrainSource",
        exaggeration: TERRAIN_EXAGGERATION,
      })
    );
  }

  map.on("load", () => {
    // Render map items
    mapIsReady.value = true;

    if (props.customMapBackground) {
      // Add image source
      map.addSource("customImageSource", {
        type: "image",
        url: props.customMapBackground,
        coordinates: [
          [props.mapBoundary![0].lng, props.mapBoundary![1].lat],
          [props.mapBoundary![1].lng, props.mapBoundary![1].lat],
          [props.mapBoundary![1].lng, props.mapBoundary![0].lat],
          [props.mapBoundary![0].lng, props.mapBoundary![0].lat],
        ],
      });

      // Add image layer
      map.addLayer({
        id: "customImageLayer",
        type: "raster",
        source: "customImageSource",
      });
    }

    updatePainters();
    setupMapEventListeners();
  });
});

onUnmounted(() => {
  destroyMapEventListeners();
});

// Watch for changes in mapItems prop
watch(
  computed(() => JSON.stringify(props.mapItems.map((item) => item.key))),
  () => {
    updatePainters();
  },
  { deep: true }
);

// Watch for changes in mapBoundary prop
watch(
  () => props.mapBoundary,
  (newBounds) => {
    if (mapIsReady.value) {
      map.setMaxBounds(newBounds);
    }
  },
  { deep: true }
);
</script>

<style>
.map-label {
  font-size: 12px;
  text-align: center;
}
</style>
