import type {ItemPrice} from "./types.ts";

export function checkPriceNeedsUpdate(
	oldPrice: ItemPrice,
	newPrice: ItemPrice
): boolean {
	return oldPrice.high != newPrice.high ||
		oldPrice.highTime != newPrice.highTime ||
		oldPrice.low != newPrice.low ||
		oldPrice.lowTime != newPrice.lowTime;
}