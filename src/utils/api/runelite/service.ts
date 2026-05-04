import {Endpoints} from "./endpoints.ts";
import type {
	IRuneliteAPI,
	RuneliteAveragesResponse,
	RuneliteMappingsResponse,
	RunelitePricesResponse
} from "./types.ts";
import {http2json} from "../http";
import {Logger} from "../../logger.ts";

const logger = new Logger("🌍 RuneliteAPI");

export const RuneliteAPI: IRuneliteAPI = {
	getMappings: async () => {
		logger.log("Getting Mappings...");
		const start = window.performance.now();
		const data: RuneliteMappingsResponse = await http2json(`${Endpoints.baseURL}${Endpoints.mapping}`);
		logger.log(`Received ${data.length} Mappings. Time: ${Math.floor(window.performance.now() - start)}ms.`);
		return data;
	},
	getPrices: async () => {
		logger.log("Getting Prices...");
		const start = window.performance.now();
		const data: RunelitePricesResponse = await http2json(`${Endpoints.baseURL}${Endpoints.prices}`);
		logger.log(`Received ${Object.keys(data.data).length} Prices. Time: ${Math.floor(window.performance.now() - start)}ms.`);
		return data;
	},
	getAverages: async (key) => {
		const path = {
			"5m": Endpoints.avg5m,
			"10m": Endpoints.avg10m,
			"24h": Endpoints.avg24h,
		}[key];

		logger.log(`Getting Averages (${key})...`);
		const start = window.performance.now();
		const data: RuneliteAveragesResponse = await http2json(`${Endpoints.baseURL}${path}`);
		logger.log(`Received ${Object.keys(data.data).length} Averages. Time: ${Math.floor(window.performance.now() - start)}ms.`);
		return data;
	}
};