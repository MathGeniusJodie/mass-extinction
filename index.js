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
		border: "solid 0",
		borderColor: "inherit",
		minWidth: "0", // prevents odd behavior with flexbox
		minHeight: "0",// same
	};

	if (options.margins) {
		Object.assign(unset, options.legacy ? {
			margin: "0", // mostly for <body> and block elements
		} : {
			margin: "unset", // mostly for <body> and block elements
		});
	}


	if (options.boxSizing) {
		Object.assign(reset, { boxSizing: "inherit" });
	}


	if (options.layout) {
		Object.assign(reset, { contain: "layout" });
	}

	addBase({
		"*": { ...unset, ...reset },
	});
/*
	if (options.links) {
		addBase({
			"a": { textDecoration: options.legacy ? "none" : "unset" },
		});
	}*/
	if (options.body && !options.margins) {
		addBase({
			"body": { margin: options.legacy ? "0" : "unset" },
		});
	}
	
	if (options.buttons) {
		addBase({
			"button": { cursor: "pointer" },
		});
	}

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
			margins: true, // will be false in v1
			//links: true,
			body: false, // will be true in v1
			buttons: false, // will be true in v1
		}
	}
});