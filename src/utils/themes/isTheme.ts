/**
 * Checks if the input string is a valid theme
 * @param {string} value
 * @returns {value is "light" | "dark"}
 */
export function isTheme(value: string) : value is "light" | "dark" {
	return value === "light" || value === "dark";
}