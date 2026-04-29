import type {NumberFormatType} from "../../zustand/SettingsStore.ts";

export function isNumberFormatType(value: string) : value is NumberFormatType {
	return value === "none" || value === "dot" || value === "comma" || value === "space";
}