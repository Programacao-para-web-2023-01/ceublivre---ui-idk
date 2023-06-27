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
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					primary: "#18181b",
					"primary-content": "#F4F4F5"
				}
			}
		]
	}
};
