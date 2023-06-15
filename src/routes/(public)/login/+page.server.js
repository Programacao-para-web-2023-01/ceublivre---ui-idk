import { redirect } from "@sveltejs/kit";
import * as jose from "jose";
import { env } from "$env/dynamic/private";

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies }) {
	if (cookies.get("token")) {
		throw redirect(307, "/");
	}
}

/** @type {import("./$types").Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();

		const email = formData.get("email")?.toString() ?? "";
		const role = formData.get("role")?.toString() ?? "";

		const payload = {
			email,
			role
		};

		const jwt = await new jose.SignJWT(payload)
			.setProtectedHeader({ alg: "HS256" })
			.setExpirationTime("1h")
			.sign(new TextEncoder().encode(env.SECRET));

		cookies.set("token", jwt);

		return {
			ok: true
		};
	}
};
