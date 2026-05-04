import type {ItemAverage, ItemID, ItemMapping, ItemPrice} from "./types.ts";
import type {RuneliteAverage, RuneliteMapping, RunelitePrice} from "../api/runelite";

export function transformRuneliteMapping(data: RuneliteMapping): ItemMapping {
	return {
		id: data.id,
		name: data.name,
		examine: data.examine,
		icon: data.icon,
		members: data.members,
		limit: data.limit,
		value: data.value,
		lowalch: data.lowalch,
		highalch: data.highalch
	};
}

export function transformRunelitePrice(data: RunelitePrice, id: ItemID): ItemPrice {
	return {
		id: id,
		high: data.high,
		highTime: data.highTime,
		low: data.low,
		lowTime: data.lowTime
	};
}

export function transformRuneliteAverage(data: RuneliteAverage, id: ItemID): ItemAverage {
	return {
		id: id,
		avgHighPrice: data.avgHighPrice,
		highPriceVolume: data.highPriceVolume,
		avgLowPrice: data.avgLowPrice,
		lowPriceVolume: data.lowPriceVolume
	};
}