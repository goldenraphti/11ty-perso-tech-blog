/* eslint-disable no-undef */
module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		// require('postcss-nesting'),
		require('autoprefixer'),
		require('postcss-preset-env')({ stage: 1 }),
		require('postcss-clean'),
	],
};
