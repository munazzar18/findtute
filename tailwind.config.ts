import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|navbar|progress|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
export default config;
