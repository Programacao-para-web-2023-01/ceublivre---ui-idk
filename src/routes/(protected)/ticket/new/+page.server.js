/** @type {import("./$types").PageServerLoad} */
export async function load({ locals }) {
	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category[]>} */
	const categories = await locals.api.get("/category");

	return { categories: categories.data };
}

/** @type {import("./$types").Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Ticket>} */
		const ticket = await locals.api.multipart("/ticket", formData);

		return { form: ticket };
	}
};
