/** @type {import("./$types").PageServerLoad} */
export async function load({ locals }) {
	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category[]>} */
	const categories = await locals.api.get("/category");

	return { categories: categories.data };
}
