import type * as StoreTypes from '@athoscommerce/snap-store-mobx';

declare global {

	// Add your custom window globals here
	interface Window {
	}

	// Add your custom result typing here
	type Result = StoreTypes.Product & {
		attributes: {
			himom: string;
		};
		// attributes: {
		// }
		// custom: {
		// }
	};
}

export {};