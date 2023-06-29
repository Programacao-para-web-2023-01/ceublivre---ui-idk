// See https://kit.svelte.dev/docs/types#app

import type { ApiClient } from "$lib/server/api";
import type { JwtPayload } from "$lib/server/models";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			api: ApiClient;
			user: JwtPayload;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
