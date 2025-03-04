<script setup lang="ts">
import MapWidget, { MapItem } from "@/components/MapWidget.vue";
import { onMounted, ref, computed, Component } from "vue";

type FeatureId = string;

interface Constraint {
  featureId: FeatureId | null;
  description: string;
}

interface BomFeatureCommon {
  id: FeatureId;
  name: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
  constraints: Constraint[];
  type: "city" | "province" | "geo-area" | "river" | "sea" | "point";
}
type BomFeatureCity = BomFeatureCommon & {
  type: "city";
};

type BomFeatureProvince = BomFeatureCommon & {
  type: "province";
};

type BomFeatureGeoArea = BomFeatureCommon & {
  type: "geo-area";
};

type BomFeatureRiver = BomFeatureCommon & {
  type: "river";
};

type BomFeatureSea = BomFeatureCommon & {
  type: "sea";
};

type BomFeaturePoint = BomFeatureCommon & {
  type: "point";
  icon: string;
};

/**
 * Locations that need to be represented on the map.
 */
type BomFeature =
  | BomFeatureCity
  | BomFeatureProvince
  | BomFeatureGeoArea
  | BomFeatureRiver
  | BomFeatureSea
  | BomFeaturePoint;

/**
 * Defines the movements of political bodies across the land.
 * Tells which areas (BomFeatures) are controlled by which groups between which dates.
 */
type BomTerritory = BomFeatureCommon & {
  type: "territory";
  borders: Array<{
    startDate: string | null;
    endDate: string | null;
    containedFeatures: FeatureId[];
  }>;
};

const features: Record<string, BomFeature> = {
  "feature-land-of-nephi": {
    id: "feature-land-of-nephi",
    name: "Land of Nephi",
    description: "South of the Land of Zarahemla; higher in elevation.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-zarahemla",
        description: "South of the Land of Zarahemla",
      },
    ],
    type: "province",
  },
  "feature-land-of-zarahemla": {
    id: "feature-land-of-zarahemla",
    name: "Land of Zarahemla",
    description:
      "North of the Land of Nephi; lower in elevation; located near the River Sidon.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-nephi",
        description: "North of the Land of Nephi",
      },
      {
        featureId: "feature-river-sidon",
        description: "Located near the River Sidon",
      },
    ],
    type: "province",
  },
  "feature-river-sidon": {
    id: "feature-river-sidon",
    name: "River Sidon",
    description:
      "Flows through the Land of Zarahemla; has a directional flow that suggests a higher elevation in the south and lower in the north.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-zarahemla",
        description: "Flows through the Land of Zarahemla",
      },
    ],
    type: "river",
  },
  "feature-land-of-bountiful": {
    id: "feature-land-of-bountiful",
    name: "Land of Bountiful",
    description:
      "North of Zarahemla; acts as a narrow defensive region leading to the Land Northward.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-zarahemla",
        description: "North of Zarahemla",
      },
    ],
    type: "province",
  },
  "feature-narrow-neck-of-land": {
    id: "feature-narrow-neck-of-land",
    name: "Narrow Neck of Land",
    description:
      "Connects the Land Southward (Bountiful) to the Land Northward; described as a relatively small land passage.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-bountiful",
        description:
          "Connects the Land Southward (Bountiful) to the Land Northward",
      },
    ],
    type: "geo-area",
  },
  "feature-land-of-desolation": {
    id: "feature-land-of-desolation",
    name: "Land of Desolation",
    description:
      "North of the Narrow Neck; contains ruins of Jaredite civilization.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-narrow-neck-of-land",
        description: "North of the Narrow Neck",
      },
    ],
    type: "province",
  },
  "feature-city-of-zarahemla": {
    id: "feature-city-of-zarahemla",
    name: "City of Zarahemla",
    description: "A major city located in the Land of Zarahemla.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-zarahemla",
        description: "Located in the Land of Zarahemla",
      },
    ],
    type: "city",
  },
  "feature-sea-east": {
    id: "feature-sea-east",
    name: "Sea East",
    description: "A sea located to the east of the Land of Zarahemla.",
    startDate: null,
    endDate: null,
    constraints: [
      {
        featureId: "feature-land-of-zarahemla",
        description: "Located to the east of the Land of Zarahemla",
      },
    ],
    type: "sea",
  },
};

type Coordinates = { lat: number; lng: number };

interface LocationProposal {
  id: string;
  featureId: FeatureId;
  realWorldLocationName?: string;
  coordinates: Array<Coordinates>;
}

interface Model {
  id: number;
  name: string;
  description: string;
  featureLocations: Record<FeatureId, LocationProposal>;
  mapBoundary?: [Coordinates, Coordinates];
  customMapBackground?: string;
}

const models: Model[] = [
  {
    id: 1,
    name: "Sorenson Model",
    description: "Proposed locations based on the Sorenson model.",
    featureLocations: {
      "feature-land-of-nephi": {
        id: "location-1",
        featureId: "feature-land-of-nephi",
        realWorldLocationName: "Guatemala Highlands",
        coordinates: [
          { lat: 15.8, lng: -91.8 },
          { lat: 16.0, lng: -91.4 },
          { lat: 16.1, lng: -91.0 },
          { lat: 16.0, lng: -90.6 },
          { lat: 15.8, lng: -90.2 },
          { lat: 15.4, lng: -90.0 },
          { lat: 15.0, lng: -90.2 },
          { lat: 14.8, lng: -90.6 },
          { lat: 14.7, lng: -91.0 },
          { lat: 14.8, lng: -91.4 },
          { lat: 15.0, lng: -91.8 },
        ],
      },
      "feature-land-of-zarahemla": {
        id: "location-2",
        featureId: "feature-land-of-zarahemla",
        realWorldLocationName: "Usumacinta River basin",
        coordinates: [
          { lat: 17.8, lng: -92.8 }, // Northwest - Tabasco, Mexico
          { lat: 18.0, lng: -91.8 }, // North - Campeche border
          { lat: 17.5, lng: -90.8 }, // Northeast - Belize border
          { lat: 16.8, lng: -90.2 }, // East - Petén, Guatemala
          { lat: 16.2, lng: -90.4 }, // Southeast - Alta Verapaz, Guatemala
          { lat: 15.8, lng: -91.0 }, // South - Near Guatemalan Highlands
          { lat: 16.0, lng: -91.6 }, // Southwest - Chiapas, Mexico
          { lat: 17.0, lng: -92.5 }, // West - Usumacinta region
        ],
      },
      "feature-river-sidon": {
        id: "location-3",
        featureId: "feature-river-sidon",
        realWorldLocationName: "Usumacinta River",
        coordinates: [
          { lat: 16.0581, lng: -90.4627 },
          { lat: 16.5063, lng: -90.4725 },
          { lat: 16.8006, lng: -90.1852 },
          { lat: 16.897, lng: -90.9826 },
          { lat: 17.1738, lng: -90.9491 },
          { lat: 17.4817, lng: -91.4238 },
          { lat: 18.1444, lng: -92.1556 },
          { lat: 18.5258, lng: -92.1097 },
        ],
      },
      "feature-city-of-zarahemla": {
        id: "location-4",
        featureId: "feature-city-of-zarahemla",
        realWorldLocationName: "Santa Rosa, Guatemala",
        coordinates: [{ lat: 14.2794, lng: -90.3006 }],
      },
    },
    mapBoundary: [
      { lat: 10, lng: -100 },
      { lat: 22, lng: -85 },
    ],
  },
  {
    id: 2,
    name: "BYU Model",
    description: "Proposed locations based on the BYU model.",
    featureLocations: {
      // Add feature locations for BYU model if needed
    },
    mapBoundary: [
      { lat: 17, lng: -100 },
      { lat: 22, lng: -90 },
    ],
    customMapBackground: "src/assets/images/mormonsmap.jpg",
  },
];

const mapItems = computed<MapItem[]>(() => {
  return Object.values(selectedModel.value.featureLocations).map(
    (location) => ({
      key: location.featureId,
      type: features[location.featureId].type,
      coordinates: location.coordinates,
      label: features[location.featureId].name,
    })
  );
});

const selectedModel = ref<Model>(models[0]);

function getProposedLocationName(featureId: FeatureId): string {
  const location = selectedModel.value.featureLocations[featureId];
  return location
    ? location.realWorldLocationName || "Location proposed"
    : "No location proposed";
}

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function selectModel(model: Model) {
  selectedModel.value = model;
  showDropdown.value = false;
}

const expandedFeatures = ref<Set<FeatureId>>(new Set());

function toggleFeature(featureId: FeatureId) {
  if (expandedFeatures.value.has(featureId)) {
    expandedFeatures.value.delete(featureId);
  } else {
    expandedFeatures.value.add(featureId);
  }
}

const mapWidgetRef = ref<InstanceType<typeof MapWidget>>();

function editFeature(featureId: FeatureId) {
  // Logic to edit the feature's location
  if (mapWidgetRef.value) {
    mapWidgetRef.value.editMapItem(
      featureId,
      (save: boolean, newCoordinates: Coordinates[]) => {
        const location = selectedModel.value.featureLocations[featureId];
        if (save && location) {
          location.coordinates = newCoordinates;
        }
      }
    );
  }
}

function drawFeature(featureId: FeatureId) {
  // Logic to draw the feature's location
  if (mapWidgetRef.value) {
    const featureType = features[featureId].type;
    mapWidgetRef.value.drawFeature(featureType);
  }
}

const editingBoundary = ref(false);

function editBoundary() {
  editingBoundary.value = true;
  if (mapWidgetRef.value) {
    mapWidgetRef.value.editBoundary((save: boolean, newBoundary: any) => {
      if (save) {
        // find bounds by max/min lat and lang
        const maxLat = Math.max(
          newBoundary[0].lat,
          newBoundary[1].lat,
          newBoundary[2].lat,
          newBoundary[3].lat
        );
        const maxLng = Math.max(
          newBoundary[0].lng,
          newBoundary[1].lng,
          newBoundary[2].lng,
          newBoundary[3].lng
        );
        const minLat = Math.min(
          newBoundary[0].lat,
          newBoundary[1].lat,
          newBoundary[2].lat,
          newBoundary[3].lat
        );
        const minLng = Math.min(
          newBoundary[0].lng,
          newBoundary[1].lng,
          newBoundary[2].lng,
          newBoundary[3].lng
        );
        selectedModel.value.mapBoundary = [
          { lat: minLat, lng: minLng },
          { lat: maxLat, lng: maxLng },
        ];
      }
      editingBoundary.value = false;
    });
  }
}
</script>

<template>
  <div class="map-view">
    <div class="top-bar">
      <span @click="toggleDropdown" class="model-selector">
        {{ selectedModel.name }}
        <span class="chevron-icon">▼</span>
      </span>
      <div v-if="showDropdown" class="dropdown-menu">
        <ul>
          <li
            v-for="model in models"
            :key="model.id"
            @click="selectModel(model)"
          >
            {{ model.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex">
      <div class="sidebar">
        <h1>Book of Mormon Geographical Features</h1>
        <button @click="editBoundary" :disabled="editingBoundary">
          Edit Map Boundary
        </button>
        <ul>
          <li v-for="feature in Object.values(features)" :key="feature.id">
            <div @click="toggleFeature(feature.id)" class="feature-title">
              <strong>{{ feature.name }}</strong>
            </div>
            <div
              v-if="expandedFeatures.has(feature.id)"
              class="feature-description"
            >
              <div>{{ feature.description }}</div>
              <div class="proposed-location">
                {{ getProposedLocationName(feature.id) }}
              </div>
              <div class="feature-buttons">
                <button
                  v-if="selectedModel.featureLocations[feature.id]"
                  @click="editFeature(feature.id)"
                >
                  Edit
                </button>
                <button v-else @click="drawFeature(feature.id)">Draw</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="map-container">
        <MapWidget
          :key="selectedModel.id"
          ref="mapWidgetRef"
          :mapItems="mapItems"
          :mapBoundary="editingBoundary ? undefined : selectedModel.mapBoundary"
          :customMapBackground="selectedModel.customMapBackground"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-view {
  height: 100vh;
  background: #f9f9f9;
}

.sidebar {
  width: 300px;
  padding: 2rem;
  background: #ffffff;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.map-container {
  flex-grow: 1;
  height: 100%;
}

h1 {
  font-size: 1.8em;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  font-size: 1.1em;
}

strong {
  font-weight: bold;
}

button {
  margin-top: 1rem;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: #fff;
}

.top-bar button {
  background: #fff;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.top-bar button:hover {
  background: #ddd;
}

.model-selector {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.chevron-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 3rem;
  background: #fff;
  color: black;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: #f0f0f0;
}

.feature-title {
  cursor: pointer;
  font-size: 1.1em;
  margin-bottom: 0.5rem;
}

.feature-description {
  margin-left: 1rem;
  font-size: 1em;
  margin-bottom: 1rem;
}

.feature-expanded-content {
  margin-top: 0.5rem;
  font-size: 0.9em;
  color: #555;
}

.proposed-location {
}

.feature-buttons {
  margin-top: 0.5rem;
}

.feature-buttons button {
  margin-right: 0.5rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.9em;
  cursor: pointer;
}

.feature-buttons button:hover {
  background: #ddd;
}
</style>
