# Mass Extinction

a minimal, customizable, CSS reset for tailwind

[philosophy](#philosophy), [usage](#usage), [options](#options), [FAQ](#faq)

<https://github.com/MathGeniusJodie/mass-extinction>

<https://www.npmjs.com/package/mass-extinction>

## breaking changes planned for version 1

#### removed background reset

Global reset breaks `<dialog>` and violates philosophy number 2.

#### text-decoration reset only for links

better default behaviour

#### box-sizing inherit by default

Browser default styles set the box-sizing on some elements, leading to inconsistent and confusing behaviour.

#### border-color inherit no longer the default

`border-color: currentColor` is a good default for most website designs (set implicitly by `border: solid 0`)

## philosophy

-   very small, very customizable, built for tailwind
-   doesn't reset styles you're going to overwrite anyway
-   relies on inherit to set defaults (like border color and box sizing)
-   fixes common annoyances

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
		boxSizing: false, // will be true in v1
		layout: false,
		borderColor: true, // will be false in v1
		font: true,
		pseudoElements: false,
		placeholders: false,
		images: true,
		forms: false,
	}
}
```

#### legacy:

old browser support (currently for browsers that don't support "unset")

#### boxSizing:

inherit box sizing (so you can use border-box if you prefer)

#### layout:

```css
* {
	contain: layout;
}
```

avoids performance footguns (recommended)

false by default because it's tricky to get consistent styling cross-browser as safari and edge don't support this feature yet

#### borderColor

`border-color: inherit`, allows setting a default border color like in [preflight](https://tailwindcss.com/docs/preflight/)

will be false by default in v1 since the default (border color == currentColor) is a good default for most website designs

#### font

makes all elements inherit font

true by default to match [normalize.css](https://necolas.github.io/normalize.css/) but for content-focused websites, you probably don't want form elements to inherit font

#### pseudoElements:

add reset styles to `::before` and `::after`

#### placeholders:

unset placeholder opacity (mostly for firefox)

#### images:

unset image height (makes images keep aspect ratio)

#### forms:

removes inconsistent styling in mobile safari

this setting is false by default because if you want consistent styles for form controls it's recommended you use a more complete library like <https://tailwindcss-custom-forms.netlify.app/> that will make this reset redundant

## FAQ

#### why is there no `main{display: block}` for ie?

if you want to support ie, put `role=main` on a `<div>`

#### why not reset styles for fieldset and legend?

fieldsets should be avoided <https://bugs.chromium.org/p/chromium/issues/detail?id=375693>, use `role=group` on a `<div>` instead

#### why not add `display:none` to `<template>` elements for ie?

if you want to support ie, use script tags instead

#### why not reset `<ul>` and `ol` styles?

you should use `role=list` on a `<div>` if you want an unstyled list

#### why aren't pseudoelement resets enabled by default

the tailwindcss workflow rarely uses pseudoelement

#### why not set `cursor:pointer` on buttons?

because that's not the semantics that operating systems use
