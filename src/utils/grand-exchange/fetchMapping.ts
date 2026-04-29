import type {FetchMappingsType} from "./FetchTypes.ts";

const API_URL: string = "https://prices.runescape.wiki/api/v1/osrs/mapping";

export async function fetchMapping(): Promise<FetchMappingsType> {
	const response: Response = await fetch(API_URL);
	return response.json();
}