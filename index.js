const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, theme }) => {
	const options = theme("extinguish", {});

	var unset = options.legacy ? {
		font: "inherit", // mostly for form controls and headings
		color: "inherit", // mostly for links
	} : {
		font: "unset", // mostly for form controls and headings
		color: "unset", // mostly for links
	};

	// will be removed in v1
	Object.assign(unset, options.legacy ? {
		background: "none", // mostly for inputs (deprecated)
		textDecoration: "none", // mostly for links (deprecated)
	} : {
		background: "unset", // mostly for inputs (deprecated)
		textDecoration: "unset", // mostly for links (deprecated)
	});

	var reset = {
		//boxSizing: "inherit", // will be enabled in v1
		border: "solid 0",
		borderColor: "inherit",
		minWidth: "0", // prevents odd behavior with flexbox
		minHeight: "0", // same
	};

	// will be removed in v1
	if (options.boxSizing) {
		Object.assign(reset, { boxSizing: "inherit" });
	}

	// will be removed in v1
	if (options.margins) {
		Object.assign(unset, options.legacy ? {
			margin: "0", // mostly for <body> and block elements
		} : {
			margin: "unset", // mostly for <body> and block elements
		});
	}

	if (options.layout) {
		Object.assign(reset, { contain: "layout" });
	}

	addBase({
		"*": { ...unset, ...reset },
		// will be enabled in v1
		//"a": { textDecoration: options.legacy ? "none" : "unset" },
		//"textarea, input, body":{ margin: options.legacy ? "0" : "unset" },
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

	if (options.forms) {
		addBase({
			"[type=email], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=url], textarea":{
				borderRadius: "unset",
				appearance: "unset",
			}
		});
	}
}, {
	theme: {
		extinguish: {
			legacy: true,
			boxSizing: false, // will be true in v1
			layout: false,
			pseudoElements: false,
			placeholders: false,
			images: true,
			margins: true, // will be false in v1
			forms: false,
		}
	}
});