/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				dark: '#171717',
				principal: '#ff204e',
				secundario: '#574AE2',
			},
			fontFamily: {
				'rubik': ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
