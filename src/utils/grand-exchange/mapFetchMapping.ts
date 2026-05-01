import type {FetchMappingType} from "./fetch-types.ts";
import type {ItemMapping} from "./types.ts";

export function mapFetchMapping(mapping: FetchMappingType): ItemMapping {
	return {
		id: mapping.id,
		name: mapping.name,
		examine: mapping.examine,
		icon: mapping.icon,
		members: mapping.members,
		limit: mapping.limit,
		value: mapping.value,
		lowalch: mapping.lowalch,
		highalch: mapping.highalch
	}
}