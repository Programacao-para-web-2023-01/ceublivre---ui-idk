/** @type {import("./$types").PageServerLoad} */
export async function load({ locals }) {
	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category[]>} */
	const categories = await locals.api.get("/category");

	return { categories: categories.data };
}

/** @type {import("./$types").Actions} */
export const actions = {
	new: async ({ request, locals }) => {
		const formData = await request.formData();

		const category = formData.get("newCategory")?.toString() ?? "";

		const content = {
			name: category
		};

		/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category>} */
		await locals.api.post("/category", content);

		return {};
	},
	update: async ({ request, locals }) => {
		const formData = await request.formData();

		const id = formData.get("updateId")?.toString() ?? "";
		const category = formData.get("updateCategory")?.toString() ?? "";

		const content = {
			name: category
		};

		/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category>} */
		await locals.api.put(`/category/${id}`, content);

		return {};
	},
	delete: async ({ request, locals }) => {
		const formData = await request.formData();

		const id = formData.get("delete")?.toString() ?? "";

		await locals.api.delete(`/category/${id}`);

		return {};
	}
};
