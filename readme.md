# Mass Extinction

a minimal, customizable, CSS reset for tailwind

<https://github.com/MathGeniusJodie/mass-extinction>

<https://www.npmjs.com/package/mass-extinction>

## Breaking Changes Planned for Version 1

#### margin reset only for body

Removed because it breaks `<dialog>` and because margins are usually explicitly set on elements that have a default margin. Since almost every website removes margin on `<body>` and the tailwind class `m-0` is rarely used, the default config will still remove margin on `<body>`.

To migrate, it's recommended that if you want an unstyled version of someting like a heading or a list, you use `role="list"` or `role="heading"` on a `<div>`. Or alternatively, you can change the `margins` option to `true`.

#### Removed background reset

Removed because it breaks `<dialog>` and because a white background is a good default for text inputs for most website designs.

#### text-decoration reset only for links

better default behaviour

#### cursor:pointer on buttons

better default behaviour

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
		boxSizing: false,
		layout: false,
		pseudoElements: false,
		placeholders: false,
		images: true,
		margins: true, // will be false in v1
		body: false, // will be true in v1
		buttons: false, // will be true in v1
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


#### pseudoElements:

add reset styles to `::before` and `::after`

#### placeholders:

unset placeholder opacity (mostly for firefox)

#### images:

unset image height (makes images keep aspect ratio when width is changed)