const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, theme }) => {
	const options = theme("extinguish", {});

	var unset = options.legacy ? {
		margin: "0", // mostly for <body> and block elements
		background: "none", // mostly for inputs
		textDecoration: "none", // mostly for links
		font: "inherit", // mostly for form controls and headings
		color: "inherit", // mostly for links
	} : {
		margin: "unset", // mostly for headings and <body>
		background: "unset", // mostly for inputs
		textDecoration: "unset", // mostly for links
		font: "unset", // mostly for form controls and headings
		color: "unset", // mostly for links
		//textAlign: "unset", // possible future addition, mostly for th
	};

	var reset = {
		border: "solid 0",
		borderColor: "inherit",
		minWidth: "0", // prevents odd behavior with flexbox
		minHeight: "0",// same
	};

	if (options.boxSizing) {
		Object.assign(reset, { boxSizing: "inherit" });
	}


	if (options.layout) {
		Object.assign(reset, { contain: "layout" });
	}

	addBase({
		"*": { ...unset, ...reset },
	});

	if (options.pseudoElements) {
		addBase({
			"::before, ::after": reset,
		});
	}

	if (options.placeholders) {
		addBase({
			"*::placeholder": { opacity: "unset" }, // for firefox
		});
	}

	if (options.images) {
		addBase({
			"img, video": {
				height: options.legacy ? "auto" : "unset",
			},
		});
	}
}, {
	theme: {
		extinguish: {
			legacy: true,
			boxSizing: false,
			layout: false,
			pseudoElements: false,
			placeholders: false,
			images: true,
		}
	}
});