import type {ItemAverage, ItemPrice} from "./types.ts";

export function isItemAverageEqual(avg1: ItemAverage, avg2: ItemAverage): boolean {
	return avg1.avgHighPrice == avg2.avgHighPrice &&
		avg1.avgLowPrice == avg2.avgLowPrice &&
		avg1.highPriceVolume == avg2.highPriceVolume &&
		avg1.lowPriceVolume == avg2.lowPriceVolume;
}

export function isItemPriceEqual(
	oldPrice: ItemPrice,
	newPrice: ItemPrice
): boolean {
	return oldPrice.high != newPrice.high ||
		oldPrice.highTime != newPrice.highTime ||
		oldPrice.low != newPrice.low ||
		oldPrice.lowTime != newPrice.lowTime;
}