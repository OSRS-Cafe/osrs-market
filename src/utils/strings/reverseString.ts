/**
 * Reverses the input string
 * @param {string} input
 * @returns {string}
 */
export function reverseString(input: string): string {
	return input.split("").reverse().join("");
}