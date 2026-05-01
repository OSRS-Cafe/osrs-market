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
	high: GP;
	highTime: Timestamp;
	low: GP;
	lowTime: Timestamp;
}