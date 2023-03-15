/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}'],

	theme: {
		extend: {
			colors: {
				yellow: '#F29103',
				blue: '#124AA1',
			},
		},
	},
	plugins: [],
};
