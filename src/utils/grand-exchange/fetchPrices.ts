import type {FetchPricesType} from "./fetch-types.ts";

const API_URL: string = "https://prices.runescape.wiki/api/v1/osrs/latest";

export async function fetchPrices(): Promise<FetchPricesType> {
	console.log("Fetching prices...");
	const response: Response = await fetch(API_URL);
	return response.json();
}