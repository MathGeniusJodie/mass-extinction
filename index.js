const plugin = require("tailwindcss/plugin");

module.exports = plugin(
	({ addBase, theme }) => {
		const options = theme("extinguish", {});

		var unset = options.legacy
			? {
					margin: "0",
					color: "inherit",
			  }
			: {
					margin: "unset",
					color: "unset",
			  };

		var reset = {
			//boxSizing: "inherit", // will be enabled in v1
			border: "solid 0",
			minWidth: "0", // prevents odd behavior with flexbox
			minHeight: "0", // same
		};

		if (options.font) {
			Object.assign(unset, {
				font: options.legacy ? "inherit" : "unset" + " /* font option */",
			});
		}

		// will be removed in v1
		Object.assign(
			unset,
			options.legacy
				? {
						background: "none", // mostly for inputs (deprecated)
						textDecoration: "none", // mostly for links (deprecated)
				  }
				: {
						background: "unset", // mostly for inputs (deprecated)
						textDecoration: "unset", // mostly for links (deprecated)
				  }
		);

		// will be removed in v1
		if (options.boxSizing) {
			Object.assign(reset, { boxSizing: "inherit /* boxSizing option */" });
		}

		if (options.layout) {
			Object.assign(reset, { contain: "layout /* layout option */" });
		}

		if (options.borderColor) {
			Object.assign(reset, { borderColor: "inherit /* borderColor option */" });
		}

		addBase({
			// will be enabled in v1
			//"a": { textDecoration: options.legacy ? "none" : "unset" },
			// will be enabled once <dialog> is supported in firefox and safari
			//"dialog": { margin: "auto" },
		});

		if (options.pseudoElements) {
			addBase({
				"/* unset */\n*": unset,
				"/* reset */\n*, ::before, ::after": reset,
			});
		} else {
			addBase({
				"*": {
					...unset,
					...reset,
				},
			});
		}

		if (options.placeholders) {
			addBase({
				"/* placeholder option */\n*::placeholder": {
					opacity: "unset",
				}, // for firefox
			});
		}

		if (options.images) {
			addBase({
				"/* images option */\nimg, video": {
					height: options.legacy ? "auto" : "unset",
				},
			});
		}

		if (options.forms) {
			addBase({
				"/* forms option */\n[type=email], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=url], textarea": {
					borderRadius: "unset",
					appearance: "unset",
				},
			});
		}
	},
	{
		theme: {
			extinguish: {
				legacy: true,
				boxSizing: false, // will be true in v1
				layout: false, // add paint option in the future?
				borderColor: true, // will be false in v1
				font: true,
				pseudoElements: false,
				placeholders: false,
				images: true,
				forms: false,
			},
		},
	}
);
