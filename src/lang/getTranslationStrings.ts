import type {TranslationKey, TranslationStrings} from "./Types.ts";
import {en_us} from "./en_us.ts";
import {de_de} from "./de_de.ts";

export function getTranslationStrings(key: TranslationKey): TranslationStrings {
	switch(key) {
		case "en_us": return en_us;
		case "de_de": return de_de;
	}
}