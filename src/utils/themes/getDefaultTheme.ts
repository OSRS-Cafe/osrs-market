import {isDarkColorScheme} from "./isDarkColorScheme.ts";

/**
 * Returns the default theme, depending on user device / browser
 * @returns {"dark" | "light"}
 */
export function getDefaultTheme(): "dark" | "light" {
	return isDarkColorScheme() ? "dark" : "light";
}