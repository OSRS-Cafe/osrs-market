import type {FetchPriceType} from "./fetch-types.ts";
import type {ItemPrice} from "./types.ts";

export function mapFetchPrice(price: FetchPriceType): ItemPrice {
	return {
		high: price.high,
		highTime: price.highTime,
		low: price.low,
		lowTime: price.lowTime
	}
}