import { redirect } from "@sveltejs/kit";

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

		// As we're using edge API and front-end, there's a limit to this function (needs review)
		if (formData.has("image")) formData.delete("image");

		/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Ticket>} */
		await locals.api.multipart("/ticket", formData);

		throw redirect(302, "/");
	}
};
