export type RuneliteMapping = {
	id: number;
	name: string;
	examine: string;
	icon: string;
	members: boolean;
	limit: number;
	value: number;
	lowalch: number;
	highalch: number;
}

export type RuneliteMappingsResponse = RuneliteMapping[];

export type RunelitePrice = {
	high: number;
	highTime: number;
	low: number;
	lowTime: number;
}

export type RunelitePricesResponse = {
	data: Record<number, RunelitePrice>;
}

export type RuneliteAverage = {
	avgHighPrice: number;
	highPriceVolume: number;
	avgLowPrice: number;
	lowPriceVolume: number;
}

export type RuneliteAveragesResponse = {
	data: Record<number, RuneliteAverage>;
}

type RuneliteAveragesKey = "5m" | "10m" | "24h";

export interface IRuneliteAPI {
	getMappings: () => Promise<RuneliteMappingsResponse>;
	getPrices: () => Promise<RunelitePricesResponse>;
	getAverages: (key: RuneliteAveragesKey) => Promise<RuneliteAveragesResponse>;
}