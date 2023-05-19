import { env } from "$env/dynamic/private";

const { API_ENDPOINT } = env;

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
	const { id } = params;
	const res = await fetch(`${API_ENDPOINT}/tickets/${id}`);
	const json = await res.json();
	return { ticket: json };
}
