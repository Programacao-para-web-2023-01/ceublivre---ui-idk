/** @type {import("./$types").PageServerLoad} */
export async function load({ locals }) {
	/** @type {import("$lib/server/models").ApiPayload<import("$lib/server/models").Ticket[]>} */
	const tickets = await locals.api.get("/ticket");

	return { tickets: tickets.data };
}
