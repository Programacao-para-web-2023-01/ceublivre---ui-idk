import { env } from "$env/dynamic/private";
import { ApiClient } from "$lib/server/api";
import * as jose from "jose";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const token = event.cookies.get("token");

	if (token) {
		event.locals.api = new ApiClient(token);

		const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(env.SECRET));
		const { email, role } = /** @type {import("$lib/server/models").JwtPayload} */ (payload);

		event.locals.user = { email, role };
	}

	const response = await resolve(event);
	return response;
}
