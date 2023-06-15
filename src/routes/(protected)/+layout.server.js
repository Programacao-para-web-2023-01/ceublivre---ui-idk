import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").LayoutServerLoad} */
export async function load({ cookies }) {
	if (!cookies.get("token")) {
		throw redirect(307, "/login");
	}
}
