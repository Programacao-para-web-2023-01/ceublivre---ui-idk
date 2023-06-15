import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies }) {
	if (cookies.get("token")) {
		cookies.delete("token");
	}
	throw redirect(307, "/login");
}
