# Mass Extinction

a minimal, customizable, CSS reset for tailwind

[philosophy](#philosophy), [usage](#usage), [options](#options), [FAQ](#faq)

<https://github.com/MathGeniusJodie/mass-extinction>

<https://www.npmjs.com/package/mass-extinction>

## philosophy

-   small code size is a priority
-   does more than preflight by fixing some common annoyances
-   lets you pick the resets you want/need if you want to deviate from the sensible defaults
-   is made specifically for a tailwind workflow
-   doesn't reset styles you're going to overwrite anyway, follows [normalize](https://necolas.github.io/normalize.css/)'s approach of keeping default browser styles in cases where they do no harm
-   relies on inherit to set defaults (like border color) when possible, allowing the use of utility classes

## usage

in tailwind.config.js

```js
module.exports = {
	plugins: [require("mass-extinction")],
	corePlugins: {
		preflight: false,
	},
};
```

in your css

```css
@tailwind base;
```

## options

```js
theme: {
	extinguish: {
		legacy: true,
		boxSizing: false, // "unset" "content-box" "border-box" "inherit"
		layout: false,
		borderColor: false,
		font: true,
		pseudoElements: false,
		placeholders: false,
		images: true,
		forms: false,
		lists: false,
		forElements(element,spec){}
	}
}
```

#### legacy:

old browser support (currently only for ie11), doesn't use the [unset keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/unset) and changes default styles that are different from other browsers (currently `<pre>`, `<code>` and `<samp>` not inheriting `font-size`)

#### layout:

```css
* {
	contain: layout;
}
```

avoids performance footguns (recommended)

false by default because it's tricky to get consistent styling cross-browser as safari and edge don't support this feature yet, this also breaks the [tailwind typography plugin](https://tailwindcss.com/docs/typography-plugin)

#### borderColor

`border-color: inherit`, allows setting a default border color like in [preflight](https://tailwindcss.com/docs/preflight/)

#### font

makes all elements inherit font

true by default to match [normalize.css](https://necolas.github.io/normalize.css/) but for content-focused websites, you probably don't want form elements to inherit font

#### pseudoElements:

add reset styles to `::before` and `::after`

false by default since the tailwindcss workflow rarely uses pseudoelements

pseudoelements should be avoided in general since content belongs in html and there doesn't exist a way to hide purely presentational pseudoelement content from screen readers

must be enabled for the [tailwind typography plugin](https://tailwindcss.com/docs/typography-plugin) to work

#### placeholders:

unset placeholder opacity (mostly for firefox)

#### images:

unset image height (makes images keep aspect ratio)

#### forms:

removes inconsistent styling in mobile safari

this setting is false by default because if you want consistent styles for form controls it's recommended you use a more complete library like <https://github.com/tailwindlabs/tailwindcss-forms> that will make this reset redundant

#### lists:

unstyle `<ul>` and `<ol>` elements

this setting is false by default because in most cases you can just use `role=list` on a `<div>` if you want an unstyled list

#### forElements:

function that returns css rules

first argument is the element name as a string

second argument is an object containing the properties of the element according to the html spec (currently just contentModel and display)

example:

```js
// make flex the default display property for elements that accept flow content
(element, spec) {
	const rules = {};
	if (
		spec.contentModel == "flow" && spec.display == "block"
	) {
		rules[element] = {
			display: "flex",
			flexDirection: "column",
		};
	}
	return rules;
}

```

## FAQ

#### why is there no `main{display: block}` for ie?

if you want to support ie, put `role=main` on a `<div>`

#### why not reset styles for fieldset and legend?

fieldsets should be avoided <https://bugs.chromium.org/p/chromium/issues/detail?id=375693>, use `role=group` on a `<div>` instead

#### why not add `display:none` to `<template>` elements for ie?

if you want to support ie, use script tags instead

#### why not set `cursor:pointer` on buttons?

because that's not the semantics that operating systems use
