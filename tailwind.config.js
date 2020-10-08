const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {	
		extend: {
			fontFamily: {
				sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
			colors: {
				primary: {
					'50': '#E1E6E9',
					'100': '#B5C1C9',
					'200': '#8497A5',
					'300': '#536D81',
					'400': '#2E4E66',
					'500': '#092F4B',
					'600': '#082A44',
					'700': '#06233B',
					'800': '#051D33',
					'900': '#021223'
				},
				secondary: {
					'100': '#FAD5CB',
					'200': '#F6B9A8',
					'300': '#F29C85',
					'400': '#F0876B',
					'500': '#ED7251',
					'600': '#EB6A4A',
					'700': '#E85F40',
					'800': '#E55537',
					'900': '#E04227'
				}
			},	
		},
	},
	variants: {},
	plugins: [],
};
