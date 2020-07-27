# Mass Extinction

a minimal, customizable, CSS reset for tailwind

<https://github.com/MathGeniusJodie/mass-extinction>

<https://www.npmjs.com/package/mass-extinction>

## breaking changes planned for version 1

#### margin reset only on some elements

Removed because it breaks `<dialog>` and because margins are usually explicitly set on elements that have a default margin. Since almost every website removes margin on `<body>` and the tailwind class `m-0` is rarely used, the default config will still remove margin on `<body>`. Margins are also removed on textareas and inputs to smooth over cross-browser differences.

To migrate, it's recommended that if you want an unstyled version of someting like a heading or a list, you use `role="list"` or `role="heading"` on a `<div>`.

#### removed background reset

Removed because it breaks `<dialog>` and because a white background is a good default for text inputs for most website designs.

#### text-decoration reset only for links

better default behaviour

#### box-sizing inherit by default

Browser default styles set the box-sizing on some elements, leading to inconsistent and confusing behaviour.

## output of the default config

```css
* {
  margin: 0; /* mostly for <body> and block elements (deprecated) */
  background: none; /* mostly for inputs (deprecated) */
  text-decoration: none; /* mostly for links (deprecated) */
  font: inherit; /* mostly for form controls and headings */
  color: inherit; /* mostly for links */
  border: solid 0; 
  border-color: inherit;
  min-width: 0; /* prevents odd behavior with flexbox */
  min-height: 0; /* same */
}

img, video {
  height: auto
}
```

## philosophy

* very small, very customizable, built for tailwind
* doesn't reset styles you're probably going to overwrite anyway
* relies on inherit to set defaults (like border color and box sizing)
* fixes common annoyances

## usage

in tailwind.config.js

```js
module.exports = {
	plugins: [
		require('mass-extinction'),
	],
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
		pseudoElements: false,
		placeholders: false,
		images: true,
		margins: true, // will be false in v1
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
*{
	contain: layout
}
```

avoids performance footguns (recommended)

false by default because it's tricky to get consistent styling cross-browser as safari and edge don't support this feature yet

#### pseudoElements:

add reset styles to `::before` and `::after`

#### placeholders:

unset placeholder opacity (mostly for firefox)

#### images:

unset image height (makes images keep aspect ratio when width is changed)

#### forms:

(subject to changes)

removes inconsistent styling in mobile safari

this setting is false by default because if you want consistent styles for form controls it's recommended you use a more complete library like <https://tailwindcss-custom-forms.netlify.app/> that will make this reset redundant

## FAQ

#### why is there no `main{display: block}` for ie?

if you want to support ie, put role=main on a `<div>`

#### why not reset styles for fieldset and legend?

fieldsets should be avoided <https://bugs.chromium.org/p/chromium/issues/detail?id=375693> use `role=group` on a `<div>` instead

#### why not add `display:none` to `<template>` elements for ie?

if you want to support ie, use script tags instead

#### why not reset `<ul>` and `ol` styles?

you should use `role=list` on a `<div>` if you want an unstyled list

#### why aren't pseudoelement resets enabled by default

the tailwindcss workflow rarely uses pseudoelement

#### why not set `cursor:pointer` on buttons?

because that's not the semantics that operating systems use








