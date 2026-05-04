import type {RequestData} from "./request-data.ts";

const DEFAULT_DATA: RequestData = {
	method: "GET",
	body: null
}

export async function http(url: string, data: RequestData = DEFAULT_DATA): Promise<Response> {
	const response = await fetch(url, {
		method: data.method,
		body: data.body
	});
	if(!response.ok)
		throw new Error(`http failed for ${url} method ${data.method} body ${data.body}: ${response.status} ${response.statusText}`);
	return response;
}