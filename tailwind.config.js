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
	daisyui: {
		themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		base: false, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true // Shows info about daisyUI version and used config in the console when building your CSS
	},
	plugins: [require('daisyui')]
};
