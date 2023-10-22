/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#060E13'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'orange-gradient':
					'linear-gradient(93deg, #EFAE04 47.21%, #FA8700 128.3%, rgb(255, 185, 2) 157.86%);'
			}
		}
	},
	plugins: []
};
