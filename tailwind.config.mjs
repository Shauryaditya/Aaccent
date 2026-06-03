/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				oxford: {
					DEFAULT: '#002147',
					dark: '#001530',
					light: '#0a2e5c',
				},
				tan: {
					DEFAULT: '#D2B48C',
					dark: '#bfa27a',
					light: '#e3d4c1',
				}
			}
		},
	},
	plugins: [],
}

