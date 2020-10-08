const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {	
		extend: {
			fontFamily: {
				sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
			colors: {
				primary: '#092F4B',
				secondary: {
					'200': '#FFBFA9',
					'500': '#ED7251',
				}
			},	
		},
	},
	variants: {},
	plugins: [],
};
