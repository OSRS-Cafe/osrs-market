import type {TranslationKey} from "./Types.ts";

export function isTranslationKey(value: string) : value is TranslationKey {
	return value === "en_us" || value === "de_de";
}