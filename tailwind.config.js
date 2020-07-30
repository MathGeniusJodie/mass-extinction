module.exports = {
	plugins: [
		require('./index.js'),
	],
	corePlugins: {
		preflight: false,
		animation: false,
	},
	theme: {
			extinguish: {
			legacy: false,
			boxSizing: true,
			layout: true,
			font: true,
			pseudoElements: true,
			placeholders: true,
			images: true,
			forms: true,
		},
	},
};
