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
	listStyle: "none",
	padding: "0",
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
			// color affects: a, mark, input, textarea, keygen, select, button
			...(options.font && { font: "unset", color: "unset" }),
		});

		const reset = {
			...(options.boxSizing && { boxSizing: options.boxSizing }),
			border: "solid 0",
			...(options.borderColor && { borderColor: "inherit" }),
			minWidth: "0", // prevents odd behavior with flexbox
			minHeight: "0", // same
			...(options.layout && { contain: "layout" }),
		};

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
			a: polyfillUnset({
				textDecoration: "unset",
				...(!options.font && { color: "unset" }),
			}),
			// will be enabled once <dialog> is supported in firefox and safari
			//"dialog": { margin: "auto" },
			// will be enabled after purgecss testing
			//"pre": { tabSize: "4" },
		});

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

		if (options.legacy && !options.font) {
			addBase({
				"/* normalize styles that are different in ie  */\npre, code, samp": {
					fontSize: "inherit",
				},
			});
		}

		if (options.lists) {
			addBase({
				"/* lists reset  */\nul,ol": polyfillUnset({
					padding: "unset",
					listStyle: "unset",
				}),
			});
		}
	},
	{
		theme: {
			extinguish: {
				legacy: true,
				boxSizing: false,
				layout: false,
				borderColor: false,
				font: true,
				pseudoElements: false,
				placeholders: false,
				images: true,
				forms: false,
				lists: false,
			},
		},
	}
);
