import type {ItemMapping} from "./types.ts";

const BASE_IMAGE_URL: string = "https://oldschool.runescape.wiki/images/";

export function getIconByMapping(mapping: ItemMapping, detail: boolean): string {
	return getIconByRuneliteName(mapping.icon, detail);
}

export function getIconByRuneliteName(icon: string, detail: boolean): string {
	const filename = icon.replaceAll(" ", "_");

	return detail ?
		BASE_IMAGE_URL + filename.replace(".png", "_detail.png") :
		BASE_IMAGE_URL + filename;
}