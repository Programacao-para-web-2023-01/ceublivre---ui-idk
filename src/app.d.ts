// See https://kit.svelte.dev/docs/types#app

import type { ApiClient } from "$lib/server/api";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			api: ApiClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
