const plugin = require('tailwindcss/plugin');

module.exports = {
	prefix: '',
	important: false,
	content: ['./views/**/*.twig'],
	separator: ':',
	theme: {
		/**
		 * Use Wordpress Breakpoints
		 * https://github.com/WordPress/gutenberg/blob/master/packages/base-styles/_breakpoints.scss
		 */
		screens: {
			sm: '600px',
			md: '782px',
			lg: '960px',
			xl: '1080px',
			wide: '1280px',
			huge: '1440px',
		},
		container: {
			center: true,
		},
		extend: {
			colors: {
				orange: {
					50: '#FEF8F4',
					100: '#FDF0EA',
					200: '#F9DACA',
					300: '#F5C3AB',
					400: '#EE976B',
					500: '#E66A2C',
					600: '#CF5F28',
					700: '#8A401A',
					800: '#683014',
					900: '#45200D',
				},
				purple: {
					DEFAULT: '#4F3590',
					50: '#F6F5F9',
					100: '#EDEBF4',
					200: '#D3CDE3',
					300: '#B9AED3',
					400: '#8472B1',
					500: '#4F3590',
					600: '#473082',
					700: '#2F2056',
					800: '#241841',
					900: '#18102B',
				},
				lime: {
					50: '#FDFDF4',
					100: '#FAFCEA',
					200: '#F3F6CA',
					300: '#EBF1A9',
					400: '#DCE769',
					500: '#CDDC29',
					600: '#B9C625',
					700: '#7B8419',
					800: '#5C6312',
					900: '#3E420C',
				},
				tint: {
					10: '#FFFFFF19',
					25: '#FFFFFF44',
					50: '#FFFFFF88',
					75: '#FFFFFFCC',
					90: '#FFFFFFE6',
				},
			},
			fontFamily: {
				display: ['Raleway', 'sans-serif'],
			},
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(function ({ addVariant }) {
			addVariant('admin', '.admin-bar &');
		}),
	],
};
