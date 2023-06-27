import { env } from "$env/dynamic/private";

export class ApiClient {
	/**
	 * @private
	 * @type {string}
	 */
	token = "";

	/** @param {string} token */
	constructor(token) {
		this.token = token;
	}

	/**
	 * @private
	 * @static
	 * @param {string} path
	 **/
	static apiUrl(path) {
		const apiEndpoint = env.API_ENDPOINT.replace(/\/$/, "");

		if (!path.startsWith("/")) {
			path = `/${path}`;
		}

		return `${apiEndpoint}${path}`;
	}

	/**
	 * @template T
	 * @param {string} path
	 * @param {object} payload
	 * @returns {Promise<import("./models").ApiPayload<T>>}
	 **/
	async get(path = "/", payload = {}) {
		const query = new URLSearchParams({ ...payload }).toString();

		const res = await fetch(ApiClient.apiUrl(path) + (query.length ? `?${query}` : ""), {
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		});

		/** @type {import("./models").ApiPayload<T>} */
		const json = await res.json();

		return json;
	}

	/**
	 * @template T
	 * @param {string} path
	 * @param {object} payload
	 * @returns {Promise<import("./models").ApiPayload<T>>}
	 **/
	async post(path = "/", payload = {}) {
		const res = await fetch(ApiClient.apiUrl(path), {
			method: "post",
			headers: {
				Authorization: `Bearer ${this.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		});

		/** @type {import("./models").ApiPayload<T>} */
		const json = await res.json();

		return json;
	}

	/**
	 * @template T
	 * @param {string} path
	 * @param {object} payload
	 * @returns {Promise<import("./models").ApiPayload<T>>}
	 **/
	async put(path = "/", payload = {}) {
		const res = await fetch(ApiClient.apiUrl(path), {
			method: "put",
			headers: {
				Authorization: `Bearer ${this.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		});

		/** @type {import("./models").ApiPayload<T>} */
		const json = await res.json();

		return json;
	}

	/**
	 * @template T
	 * @param {string} path
	 * @returns {Promise<import("./models").ApiPayload<T>>}
	 **/
	async delete(path = "/") {
		const res = await fetch(ApiClient.apiUrl(path), {
			method: "delete",
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		});

		/** @type {import("./models").ApiPayload<T>} */
		const json = await res.json();

		return json;
	}

	/**
	 * @template T
	 * @param {string} path
	 * @param {object} payload
	 * @returns {Promise<import("./models").ApiPayload<T>>}
	 **/
	async multipart(path = "/", payload = {}) {
		const formData = new FormData();

		Object.entries(payload).forEach(([key, value]) => {
			formData.append(key, value);
		});

		const res = await fetch(ApiClient.apiUrl(path), {
			method: "post",
			headers: {
				Authorization: `Bearer ${this.token}`
			},
			body: formData
		});

		/** @type {import("./models").ApiPayload<T>} */
		const json = await res.json();

		return json;
	}
}
