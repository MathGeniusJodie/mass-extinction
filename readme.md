# Mass Extinction

a minimal, modular, CSS reset for tailwind

<https://github.com/MathGeniusJodie/mass-extinction>

<https://www.npmjs.com/package/mass-extinction>

output of the default config

```css
* {
  margin: 0; /* mostly for <body> and block elements */
  background: none; /* mostly for inputs */
  text-decoration: none; /* mostly for links */
  font: inherit; /* mostly for form controls and headings */
  color: inherit; /* mostly for links */
  border: solid 0; 
  border-color: inherit;
  min-width: 0; /* prevents odd behavior with flexbox */
  min-height: 0 /* same */
}

img, video {
  height: auto
}
```

## philosophy

* very small
* doesn't reset styles you're probably going to overwrite anyway
* relies on inherit to set defaults (like border color and box sizing)
* tries to be unopinionated or at least allow choosing what to reset
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