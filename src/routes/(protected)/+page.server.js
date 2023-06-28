/** @type {import("./$types").PageServerLoad} */
export async function load({ locals }) {
	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Ticket[]>} */
	const tickets = await locals.api.get("/ticket");

	if (tickets.success) {
		for (const ticket of tickets.data) {
			/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Category>} */
			const category = await locals.api.get(`/category/${ticket.categoryId}`);
			ticket.category = category.data.name;
			console.log(ticket.category);

			/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Status>} */
			const status = await locals.api.get(`/status/${ticket.statusId}`);
			ticket.status = status.data.name;
			console.log(ticket.status);
		}
	}

	return { tickets: tickets.data };
}
