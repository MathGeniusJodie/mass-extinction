module.exports = {
	plugins: [require("./index.js")],
	corePlugins: {
		preflight: false,
		animation: false,
	},
	theme: {
		extinguish: {
			legacy: false,
			boxSizing: "unset",
			layout: true,
			borderColor: true,
			font: true,
			pseudoElements: true,
			placeholders: true,
			images: true,
			forms: true,
		},
	},
};
