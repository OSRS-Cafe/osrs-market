import type {FetchMappingsType} from "./fetch-types.ts";

const API_URL: string = "https://prices.runescape.wiki/api/v1/osrs/mapping";

export async function fetchMappings(): Promise<FetchMappingsType> {
	console.log("Fetching mapping...");
	const response: Response = await fetch(API_URL);
	return response.json();
}