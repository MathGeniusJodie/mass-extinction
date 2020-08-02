const plugin = require("tailwindcss/plugin");

// list of unset values for ie support (in progress)
const unsetValues = {
	animation: "none",
	animationDelay: "0s",
	animationDirection: "normal",
	animationDuration: "0s",
	animationFillMode: "none",
	animationIterationCount: "1",
	animationName: "none",
	animationPlayState: "running",
	animationTimingFunction: "ease",
	backfaceVisibility: "visible",
	background: "none",
	backgroundAttachment: "scroll",
	backgroundClip: "border-box",
	backgroundColor: "transparent",
	backgroundImage: "none",
	backgroundOrigin: "padding-box",
	backgroundPosition: "0 0",
	backgroundPositionX: "0",
	backgroundPositionY: "0",
	backgroundRepeat: "repeat",
	backgroundSize: "auto auto",
	border: "medium none",
	borderStyle: "none",
	borderWidth: "medium",
	borderColor: "currentColor",

	color: "inherit",
	font: "inherit",
	height: "auto",
	margin: "0",
	textDecoration: "none",
};

const cloneObject = (object) => Object.assign({}, object);

module.exports = plugin(
	({ addBase, theme }) => {
		const options = theme("extinguish", {});

		const polyfillUnset = options.legacy
			? (object) => {
					const newObject = {};
					Object.entries(object).forEach(([key, value]) => {
						newObject[key] = value === "unset" ? unsetValues[key] : value;
					});
					return newObject;
			  }
			: cloneObject;

		const unset = polyfillUnset({
			margin: "unset",
			color: "unset", // affects: a, mark, input, textarea, keygen, select, button
			...(options.font && { font: "unset" }),
		});

		const reset = {
			//boxSizing: "inherit", // will be enabled in v1
			border: "solid 0",
			minWidth: "0", // prevents odd behavior with flexbox
			minHeight: "0", // same
			...(options.layout && { contain: "layout" }),
			...(options.borderColor && { borderColor: "inherit" }),
		};

		// will be removed in v1
		Object.assign(
			unset,
			polyfillUnset({
				background: "unset", // mostly for inputs (deprecated)
				textDecoration: "unset", // mostly for links (deprecated)
			})
		);

		// will be removed in v1
		if (options.boxSizing) {
			Object.assign(reset, {
				boxSizing: "inherit",
			});
		}

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

		addBase({
			// will be enabled in v1
			//"a": polyfillUnset({ textDecoration: "unset" }),
			// will be enabled once <dialog> is supported in firefox and safari
			//"dialog": { margin: "auto" },
			// will be enabled after purgecss testing
			//"pre": { tabSize: "4" },
		});

		if (options.legacy && !options.font) {
			addBase({
				"pre, code": {
					fontSize: "inherit",
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
				"/* images option */\nimg, video": polyfillUnset({
					height: "unset",
				}),
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
				boxSizing: false, // will be removed in v1
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
