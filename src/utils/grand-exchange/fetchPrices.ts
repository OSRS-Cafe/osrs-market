import type {FetchPricesType} from "./FetchTypes.ts";

const API_URL: string = "https://prices.runescape.wiki/api/v1/osrs/latest";

export async function fetchPrices(): Promise<FetchPricesType> {
	const response: Response = await fetch(API_URL);
	return response.json();
}