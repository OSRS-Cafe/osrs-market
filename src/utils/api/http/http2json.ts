import type {RequestData} from "./request-data.ts";

const DEFAULT_DATA: RequestData = {
	method: "GET",
	body: null
}

export async function http2json<T>(url: string, data: RequestData = DEFAULT_DATA): Promise<T> {
	const response = await fetch(url, {
		method: data.method,
		body: data.body
	});
	if(!response.ok)
		throw new Error(`http2json failed for ${url} method ${data.method} body ${data.body}: ${response.status} ${response.statusText}`);
	return response.json();
}