export type ItemID = number;
export type GP = number;
export type Timestamp = number;

export type ItemMapping = {
	id: ItemID;
	name: string;
	examine: string;
	icon: string;
	members: boolean;
	limit: number;
	value: GP;
	lowalch: GP;
	highalch: GP;
}

export type ItemPrice = {
	id: ItemID;
	high: GP;
	highTime: Timestamp;
	low: GP;
	lowTime: Timestamp;
}

export type ItemAverage = {
	id: ItemID;
	avgHighPrice: number;
	highPriceVolume: number;
	avgLowPrice: number;
	lowPriceVolume: number;
}

export type AveragesKey = "5m" | "10m" | "24h";