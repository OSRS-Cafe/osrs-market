export type RequestData = {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: BodyInit | null;
}