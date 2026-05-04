import {type AveragesKey, isItemAverageEqual, transformRuneliteAverage} from "../utils/market-data";
import {
	isItemPriceEqual,
	type ItemMapping,
	type ItemPrice,
	transformRuneliteMapping,
	transformRunelitePrice
} from "../utils/market-data";
import {
	RuneliteAPI,
	type RuneliteAveragesResponse,
	type RuneliteMapping,
	type RuneliteMappingsResponse,
	type RunelitePricesResponse
} from "../utils/api/runelite";
import {create} from "zustand";
import type {ItemAverage} from "../utils/market-data/types.ts";

type MarketDataStore = {
	data: {
		mapping: {
			byId: Record<number, ItemMapping>;
			all: ItemMapping[];
		} | null;

		prices: {
			byId: Record<number, ItemPrice>;
			all: ItemPrice[];
		} | null;

		averages: {
			key: AveragesKey;
			byId: Record<number, ItemAverage>;
			all: ItemAverage[];
		} | null;
	};
	updateMappings: () => Promise<void>;
	updatePrices: () => Promise<void>;
	updateAverages: (key: AveragesKey) => Promise<void>;
};

export const useMarketDataStore = create<MarketDataStore>()((set, get) => ({
	data: {
		mapping: null,
		prices: null,
		averages: null
	},

	updateMappings: async () => {
		const mappingsResponse: RuneliteMappingsResponse = await RuneliteAPI.getMappings();
		const mappings: RuneliteMapping[] = mappingsResponse.map(transformRuneliteMapping);
		const mappingsById: Record<number, RuneliteMapping> = Object.fromEntries(mappings.map((item) => [item.id, item]));

		const current: MarketDataStore = get();

		set({
			...current,
			data: {
				...current.data,
				mapping: {
					byId: mappingsById,
					all: mappings
				}
			}
		});
	},

	updatePrices: async () => {
		const current: MarketDataStore = get();
		const pricesResponse: RunelitePricesResponse = await RuneliteAPI.getPrices();

		const currentPrices: Record<number, ItemPrice> | null = current.data.prices?.byId ?? null;

		const newPrices: Record<number, ItemPrice> = {};

		if(currentPrices) {
			for(const key in currentPrices) {
				const newItem = transformRunelitePrice(pricesResponse.data[key], Number(key));
				const currentItem = currentPrices[key];

				// Add new data if we don't have it yet, or it needs to be updated, otherwise add the old one.
				if(isItemPriceEqual(currentItem, newItem)) {
					newPrices[key] = currentItem;
				} else {
					newPrices[key] = newItem;
				}
			}
		} else {
			for(const key in pricesResponse.data) {
				newPrices[key] = transformRunelitePrice(pricesResponse.data[key], Number(key));
			}
		}

		const allPrices = Object.keys(newPrices).map(key => newPrices[Number(key)]);

		set({
			...current,
			data: {
				...current.data,
				prices: {
					byId: newPrices,
					all: allPrices
				}
			}
		});
	},

	updateAverages: async (key: AveragesKey) => {
		const current: MarketDataStore = get();

		const averagesResponse: RuneliteAveragesResponse = await RuneliteAPI.getAverages(key);

		const currentKey: AveragesKey = current.data.averages?.key ?? key;
		const currentAverages: Record<number, ItemAverage> | null = current.data.averages?.byId ?? null;

		const newAverages: Record<number, ItemAverage> = {};

		if(currentKey == key && currentAverages != null) {
			for(const key in averagesResponse.data) {
				const average: ItemAverage = transformRuneliteAverage(averagesResponse.data[key], Number(key));
				const current: ItemAverage = currentAverages[key];
				if(isItemAverageEqual(average, current)) {
					newAverages[key] = current;
				} else {
					newAverages[key] = average;
				}
			}
		} else {
			for(const key in averagesResponse.data) {
				newAverages[key] = transformRuneliteAverage(averagesResponse.data[key], Number(key));
			}
		}

		const allAverages = Object.keys(newAverages).map(key => newAverages[Number(key)]);

		set({
			...current,
			data: {
				...current.data,
				averages: {
					key: key,
					byId: newAverages,
					all: allAverages
				}
			}
		});
	}
}));