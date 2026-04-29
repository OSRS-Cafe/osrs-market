/**
 * Returns true if the users device / browser is in dark mode
 * @returns {boolean}
 */
export function isDarkColorScheme(): boolean {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}