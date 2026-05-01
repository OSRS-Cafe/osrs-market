import {
	checkPriceNeedsUpdate,
	fetchMappings,
	fetchPrices, type FetchPriceType,
	type ItemMapping,
	type ItemPrice,
	mapFetchMapping,
	mapFetchPrice
} from "../utils/grand-exchange";
import {create} from "zustand";

type MarketDataStore = {
	isLoading: boolean;
	isReady: boolean;

	mapping: {
		byId: Record<number, ItemMapping> | null;
		all: ItemMapping[] | null;
	} | null;

	prices: {
		byId: Record<number, ItemPrice> | null;
	} | null;

	load: () => Promise<void>;
	update: () => Promise<void>;
};

export const useMarketDataStore = create<MarketDataStore>()((set, get) => ({
	isLoading: false,
	isReady: false,

	mapping: null,
	prices: null,

	load: async () => {
		if (get().isLoading || get().isReady) return;
		set({ isLoading: true });

		try {
			const mappingsRaw = await fetchMappings();
			const pricesRaw = await fetchPrices();

			const mappings = mappingsRaw.map(mapFetchMapping);
			const prices: Record<number, ItemPrice> = {};

			for(const key in pricesRaw.data) {
				const priceRaw = pricesRaw.data[key];
				prices[key] = mapFetchPrice(priceRaw);
			}

			set({
				isLoading: false,
				isReady: true,

				mapping: {
					byId: Object.fromEntries(mappings.map((item) => [item.id, item])),
					all: mappings
				},

				prices: {
					byId: prices,
				}
			});
		} catch (e) {
			console.error(e);
			set({ isLoading: false });
		}
	},

	update: async () => {
		try {
			const currentStore: MarketDataStore = get();

			const newData: Record<number, FetchPriceType> = {};
			const newPriceData: Record<number, FetchPriceType> = (await fetchPrices()).data;

			for (const key in newPriceData) {
				const newItem = mapFetchPrice(newPriceData[key]);
				const currentItem = currentStore.prices?.byId![key];

				// Add new data if we don't have it yet, or it needs to be updated, otherwise add the old one.
				if(currentItem == null || checkPriceNeedsUpdate(currentItem, newItem)) {
					newData[key] = newItem;
				} else {
					newData[key] = currentItem;
				}
			}

			set({
				isLoading: currentStore.isLoading,
				isReady: currentStore.isReady,
				mapping: currentStore.mapping,
				prices: {
					byId: newData
				}
			})
		} catch (e) {
			console.error(e);
			set({ isLoading: false });
		}
	}
}));