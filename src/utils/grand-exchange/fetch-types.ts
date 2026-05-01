export type FetchMappingType = {
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

export type FetchMappingsType = FetchMappingType[];

export type FetchPriceType = {
	high: number;
	highTime: number;
	low: number;
	lowTime: number;
}

export type FetchPricesType = {
	data: Record<number, FetchPriceType>;
}