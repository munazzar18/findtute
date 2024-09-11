import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
};
export default config;
