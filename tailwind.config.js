/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				heading: [
					'DM Serif Display',
					'DM Sans',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Ubunutu',
					'Fira Sans',
					'sans-serif',
				],
				body: [
					'DM Sans',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Ubunutu',
					'Fira Sans',
					'sans-serif',
				],
			},
		},
	},
	plugins: [],
}
