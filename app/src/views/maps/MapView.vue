<script setup lang="ts">
import MapWidget, { MapItem } from "@/components/MapWidget.vue";
import { onMounted, ref, computed, Component } from "vue";
import { SorensonModel } from "./bomModels/sorenson";
import { BYUModel } from "./bomModels/byu";
import { BomFeature, Coordinates, FeatureId, Model } from "./mapTypes";
import { BomFeatures } from "@/data/bom/features"; // Import features

const models: Model[] = [SorensonModel, BYUModel];

const importanceRank: Array<BomFeature["type"]> = [
  "region_1",
  "city_1",
  "city_2",
  "city_3",
  "region_2",
  "region_3",
  "point",
  "sea",
  "hill",
  "river",
];
const importanceByType = importanceRank.reduce((acc, type, index) => {
  acc[type] = index + 1;
  return acc;
}, {} as Record<BomFeature["type"], number>);

const mapItems = computed<MapItem[]>(() => {
  return Object.values(selectedModel.value.featureLocations).map((location) => {
    const feature = BomFeatures[location.featureId];
    return {
      key: location.featureId,
      type: feature.type,
      coordinates: location.coordinates,
      label: feature.mapLabel || feature.name,
      importance: importanceByType[feature.type],
    };
  });
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
    const featureType = BomFeatures[featureId].type;
    mapWidgetRef.value.drawFeature(
      featureType,
      (save: boolean, newCoordinates: Coordinates[]) => {
        if (save) {
          selectedModel.value.featureLocations[featureId] = {
            id: featureId,
            featureId,
            coordinates: newCoordinates,
          };
        }
      }
    );
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

function copyModelAsJson() {
  const modelJson = JSON.stringify(selectedModel.value, null, 2);
  navigator.clipboard.writeText(modelJson).then(() => {
    alert("Model copied to clipboard!");
  });
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
      <button @click="copyModelAsJson">Copy</button>
    </div>
    <div class="flex">
      <div class="sidebar">
        <h1>Book of Mormon Geographical Features</h1>
        <button @click="editBoundary" :disabled="editingBoundary">
          Edit Map Boundary
        </button>
        <ul>
          <li v-for="feature in Object.values(BomFeatures)" :key="feature.id">
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
          :customMap="selectedModel.customMap"
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
  max-height: 100vh;
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
