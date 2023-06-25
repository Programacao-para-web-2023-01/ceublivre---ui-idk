import { ApiClient } from "$lib/server/api";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const token = event.cookies.get("token");

	if (token) {
		event.locals.api = new ApiClient(token);
	}

	const response = await resolve(event);
	return response;
}
