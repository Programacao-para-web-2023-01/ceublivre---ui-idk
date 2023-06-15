import { env } from "$env/dynamic/private";

const { API_ENDPOINT } = env;

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
	const { id } = params;

	const res = await fetch(`${API_ENDPOINT}/ticket/${id}`, {
		headers: {
			Authorization: ""
		}
	});
	const json = await res.json();

	const res2 = await fetch(`${API_ENDPOINT}/category/${json.data.categoryId}`, {
		headers: {
			Authorization: ""
		}
	});
	const json2 = await res2.json();

	return { ticket: json.data, category: json2.data };
}
