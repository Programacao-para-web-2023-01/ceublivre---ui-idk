import { ApiClient } from "$lib/server/api";

/** @type {import("./$types").PageServerLoad} */
export async function load({ params, locals }) {
	const { id } = params;

	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Ticket>} */
	const ticket = await locals.api.get(`/ticket/${id}`);
	ticket.data.user = ApiClient.user(ticket.data.userId);

	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category>} */
	const category = await locals.api.get(`/category/${ticket.data.categoryId}`);

	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Reply[]>} */
	const replies = await locals.api.get(`/ticket/${id}/reply`);
	replies.data = replies.data.map((reply) => {
		reply.user = ApiClient.user(reply.userId);
		return reply;
	});

	// As we're using edge api and front-end, there's a limit into this function (needs review)
	// const imageBlob = await locals.api.file(`/ticket/${id}/image`);
	// const imageUrl = URL.createObjectURL(imageBlob);

	return {
		ticket: ticket.data,
		category: category.data,
		// image: imageUrl,
		replies: replies.data,
		user: locals.user
	};
}

/** @type {import("./$types").Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const ticketId = formData.get("ticket-id")?.toString() ?? "";
		const message = formData.get("message")?.toString() ?? "";

		/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Reply>} */
		const reply = await locals.api.post(`/ticket/${ticketId}/reply`, { message });

		return { form: reply };
	}
};
