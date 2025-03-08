export type FeatureId = string;

interface Constraint {
	featureId?: FeatureId | null;
	description: string;
}

interface BomFeatureCommon {
	id: FeatureId;
	name: string;
	mapLabel?: string;
	description: string;
	startDate: string | null;
	endDate: string | null;
	constraints: Constraint[];
	type: "city_1" | "city_2" | "city_3" | "region_1" | "region_2" | "region_3" | "river" | "sea" | "point" | "hill" | "wilderness";
}
export type BomFeatureCity = BomFeatureCommon & {
	type: "city";
};

export type BomFeatureProvince = BomFeatureCommon & {
	type: "province";
};

export type BomFeatureRiver = BomFeatureCommon & {
	type: "river";
};

export type BomFeatureSea = BomFeatureCommon & {
	type: "sea";
};


/**
 * Locations that need to be represented on the map.
 */
export type BomFeature =
	| BomFeatureCommon
	| BomFeatureCity
	| BomFeatureProvince
	| BomFeatureRiver
	| BomFeatureSea;

/**
 * Defines the movements of political bodies across the land.
 * Tells which areas (BomFeatures) are controlled by which groups between which dates.
 */
export type BomTerritory = BomFeatureCommon & {
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
	customMap?: {
		src: string;
		ratio: number;
		minZoom?: number;
		maxZoom?: number;
	}
}