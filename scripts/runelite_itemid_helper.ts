// @ts-expect-error This works as intended
import fs from "node:fs";
// @ts-expect-error This also works as intended
import path from "path";

export { };

const FILE_URL: string = "https://raw.githubusercontent.com/runelite/runelite/refs/heads/master/runelite-api/src/main/java/net/runelite/api/ItemID.java";
const ITEM_ID_REGEX: RegExp = /public static final int (\w+) = (\d+);/g;

const Logger: (msg: string) => void = (msg: string) => { console.log("[RuneLite ItemID Helper]", msg) };

Logger("Starting RuneLite ItemID Helper");
Logger(`Fetching from ${FILE_URL}`);

const response: Response = await fetch(FILE_URL);
if(!response.ok) {
	console.error(response)
	throw new Error("Bad Response, see output above.");
}

const content: string = await response.text();

Logger("Parsing...");

const itemIDs: { key: string, id: number }[] = content.matchAll(ITEM_ID_REGEX).toArray().map((match) => {
	return {
		key: match[1],
		id: Number(match[2])
	}
});

Logger(`Found ${itemIDs.length} item ids`);

const outputItemIds: string = itemIDs.map((entry) => `\t${entry.key}: ${entry.id}`).join(",\n");
const disclaimer = `
	// This file is auto-generated with runelite_itemid_helper.ts in the scripts folder
	// Generated from ${FILE_URL}
	// Don't edit manually!
`.trim().replaceAll("\t", "");
const output: string = `${disclaimer}\n\nexport const ItemID = {\n${outputItemIds}\n};`;

const output_file = path.resolve("..", "src", "data", "item-ids.ts");
Logger(`Writing to ${output_file}`);
fs.writeFile(output_file, output, () => {});

Logger("Done!");