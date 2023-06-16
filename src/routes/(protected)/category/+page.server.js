import { env } from "$env/dynamic/private";

const { API_ENDPOINT } = env;

/** @type {import("./$types").PageServerLoad} */
export async function load() {
	const res = await fetch(`${API_ENDPOINT}/category`, {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW96aW5ob2dhbWVwbGF5QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIn0.5kMgo-v4rc1fBpm55h9H4Ta5IganpsUVd2SH0KkzZWw"
		}
	});
	const json = await res.json();

	return { categories: json.data };
}
