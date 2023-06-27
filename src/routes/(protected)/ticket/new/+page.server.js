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
		const file = formData.get("image");
		const category = formData.get("categoryId")?.toString() ?? "";
		const message = formData.get("message")?.toString() ?? "";

		const content = {
			message: message,
			file: file,
			name: category
		};

		/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category>} */
		await locals.api.multipart("/ticket", content);

		return {};
	}
};
