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
			lists: true,
			forElements(element, spec) {
				const rules = {};
				if (
					element == "a" ||
					(spec.contentModel == "flow" && spec.display == "block")
				) {
					rules[element] = {
						display: "flex",
						flexDirection: "column",
					};
				}
				return rules;
			},
		},
	},
};
