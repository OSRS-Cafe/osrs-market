import type {NumberFormatType} from "../../types/NumberFormatType.ts";
import {reverseString} from "../strings";

function getNumberFormatSeparator(format: NumberFormatType): string {
	switch (format) {
		case "none": return "";
		case "dot": return ".";
		case "comma": return ",";
		case "space": return " ";
	}
}

export function formatNumber(number: number, format: NumberFormatType): string {
	const separator: string = getNumberFormatSeparator(format);
	const reversed: string = reverseString(number.toString());

	let result: string = "";

	let count: number = 0;
	reversed.split("").forEach((char: string) => {
		if(count === 3) {
			result = separator + result;
			count = 0;
		}
		result = char + result;
		count++;
	})

	return result;
}