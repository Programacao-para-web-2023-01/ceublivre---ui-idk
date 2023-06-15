import { env } from "$env/dynamic/private";

const { API_ENDPOINT } = env;

/** @type {import("./$types").PageServerLoad} */
export async function load() {
	const res = await fetch(`${API_ENDPOINT}/ticket`, {
		method: "GET",
		headers: {
			Authorization: ""
		}
	});
	const json = await res.json();
	return { tickets: json.data };
}
