/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridAutoRows: {
				'even': 'auto 1fr auto',
			},
			fontFamily: {
				sans: ['SF3FontBold', 'Helvetica', 'Times New Roman', 'Arial', 'sans-serif']
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
