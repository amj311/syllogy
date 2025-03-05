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

export type Coordinates = { lat: number; lng: number };

export interface LocationProposal {
  id: string;
  featureId: FeatureId;
  realWorldLocationName?: string;
  coordinates: Array<Coordinates>;
}

export interface Model {
  id: number;
  name: string;
  description: string;
  featureLocations: Record<FeatureId, LocationProposal>;
  mapBoundary?: [Coordinates, Coordinates];
  customMapBackground?: string;
}