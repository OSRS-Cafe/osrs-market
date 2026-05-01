import type {ItemMapping} from "./types.ts";

const BASE_IMAGE_URL: string = "https://oldschool.runescape.wiki/images/";

export function getIconByMapping(mapping: ItemMapping, detail: boolean): string {
	const filename = mapping.icon.replaceAll(" ", "_");

	return detail ?
		BASE_IMAGE_URL + filename.replace(".png", "_detail.png") :
		BASE_IMAGE_URL + filename;
}