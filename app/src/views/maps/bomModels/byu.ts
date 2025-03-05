import { Model } from "../mapTypes";

export const BYUModel: Model = {
	id: 2,
	name: "BYU Model",
	description: "Proposed locations based on the BYU model.",
	featureLocations: {
		// ...feature locations for BYU model...
	},
    mapBoundary: [
      { lat: 16, lng: -100 },
      { lat: 22, lng: -90 },
    ],
    customMapBackground: "src/assets/images/mormonsmap_enhanced_no_pins.jpg",
}
