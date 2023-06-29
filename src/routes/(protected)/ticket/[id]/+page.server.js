/** @type {import("./$types").PageServerLoad} */
export async function load({ params, locals }) {
	const { id } = params;

	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Ticket>} */
	const ticket = await locals.api.get(`/ticket/${id}`);

	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category>} */
	const category = await locals.api.get(`/category/${ticket.data.categoryId}`);

	const imageBlob = await locals.api.file(`/ticket/${id}/image`);
	const imageUrl = URL.createObjectURL(imageBlob);

	return { ticket: ticket.data, category: category.data, image: imageUrl };
}
