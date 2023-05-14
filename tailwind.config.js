/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	plugins: [require("daisyui")],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"]
				}
			}
		]
	}
};
