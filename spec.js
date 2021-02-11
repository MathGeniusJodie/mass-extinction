// html spec
// https://html.spec.whatwg.org/#semantics

module.exports = {
	html: {
		contentModel: "flow",
		display: "block",
	},
	head: {
		contentModel: "flow",
		display: "none",
	},
	title: {
		contentModel: "flow",
		display: "none",
	},
	base: {
		contentModel: "flow",
		display: "none",
	},
	link: {
		contentModel: "flow",
		display: "none",
	},
	meta: {
		contentModel: "flow",
		display: "none",
	},
	style: {
		contentModel: "flow",
		display: "none",
	},
	body: {
		contentModel: "flow",
		display: "block",
	},
	article: {
		contentModel: "flow",
		display: "block",
	},
	section: {
		contentModel: "flow",
		display: "block",
	},
	nav: {
		contentModel: "flow",
		display: "block",
	},
	aside: {
		contentModel: "flow",
		display: "block",
	},
	h1: {
		contentModel: "phrasing",
		display: "block",
	},
	h2: {
		contentModel: "phrasing",
		display: "block",
	},
	h3: {
		contentModel: "phrasing",
		display: "block",
	},
	h4: {
		contentModel: "phrasing",
		display: "block",
	},
	h5: {
		contentModel: "phrasing",
		display: "block",
	},
	h6: {
		contentModel: "phrasing",
		display: "block",
	},
	hgroup: {
		contentModel: "flow",
		display: "block",
	},
	header: {
		contentModel: "flow",
		display: "block",
	},
	footer: {
		contentModel: "flow",
		display: "block",
	},
	address: {
		contentModel: "flow",
		display: "block",
	},
	p: {
		contentModel: "phrasing",
		display: "block",
	},
	hr: {
		contentModel: "nothing",
		display: "block",
	},
	pre: {
		contentModel: "phrasing",
		display: "block",
	},
	blockquote: {
		contentModel: "flow",
		display: "block",
	},
	ol: {
		contentModel: "flow",
		display: "block",
	},
	ul: {
		contentModel: "flow",
		display: "block",
	},
	menu: {
		contentModel: "flow",
		display: "block",
	},
	li: {
		contentModel: "flow",
		display: "list-item",
	},
	dl: {
		contentModel: "flow",
		display: "block",
	},
	dt: {
		contentModel: "flow",
		display: "block",
	},
	dd: {
		contentModel: "flow",
		display: "block",
	},
	figure: {
		contentModel: "flow",
		display: "block",
	},
	figcaption: {
		contentModel: "flow",
		display: "block",
	},
	main: {
		contentModel: "flow",
		display: "block",
	},
	div: {
		contentModel: "flow",
		display: "block",
	},
	a: {
		contentModel: "flow",
		display: "inline",
	},
	em: {
		contentModel: "phrasing",
		display: "inline",
	},
	strong: {
		contentModel: "phrasing",
		display: "inline",
	},
	small: {
		contentModel: "phrasing",
		display: "inline",
	},
	s: {
		contentModel: "phrasing",
		display: "inline",
	},
	cite: {
		contentModel: "phrasing",
		display: "inline",
	},
	q: {
		contentModel: "phrasing",
		display: "inline",
	},
	dfn: {
		contentModel: "phrasing",
		display: "inline",
	},
	abbr: {
		contentModel: "phrasing",
		display: "inline",
	},
	ruby: {
		contentModel: "",
		display: "ruby",
	},
	rt: {
		contentModel: "phrasing",
		display: "ruby-text",
	},
	rp: {
		contentModel: "text",
		display: "none",
	},
	data: {
		contentModel: "phrasing",
		display: "inline",
	},
	time: {
		contentModel: "phrasing",
		display: "inline",
	},
	code: {
		contentModel: "phrasing",
		display: "inline",
	},
	var: {
		contentModel: "phrasing",
		display: "inline",
	},
	samp: {
		contentModel: "phrasing",
		display: "inline",
	},
	kbd: {
		contentModel: "phrasing",
		display: "inline",
	},
	sub: {
		contentModel: "phrasing",
		display: "inline",
	},
	sup: {
		contentModel: "phrasing",
		display: "inline",
	},
	i: {
		contentModel: "phrasing",
		display: "inline",
	},
	b: {
		contentModel: "phrasing",
		display: "inline",
	},
	u: {
		contentModel: "phrasing",
		display: "inline",
	},
	mark: {
		contentModel: "phrasing",
		display: "inline",
	},
	bdi: {
		contentModel: "phrasing",
		display: "inline",
	},
	bdo: {
		contentModel: "phrasing",
		display: "inline",
	},
	span: {
		contentModel: "phrasing",
		display: "inline",
	},
	br: {
		contentModel: "nothing",
		displayOutside: "newline",
	},
	wbr: {
		contentModel: "nothing",
		displayOutside: "break-opportunity",
	},
	ins: {
		contentModel: "transparent",
		display: "inline",
	},
	del: {
		contentModel: "transparent",
		display: "inline",
	},
	picture: {
		contentModel: "",
		display: "inline",
	},
	source: {
		contentModel: "nothing",
		display: "none",
	},
	img: {
		contentModel: "nothing",
		display: "inline",
	},
	iframe: {
		contentModel: "nothing",
		display: "inline",
	},
	embed: {
		contentModel: "nothing",
		display: "inline",
	},
	object: {
		contentModel: "nothing",
		display: "inline",
	},
	param: {
		contentModel: "nothing",
		display: "none",
	},
	video: {
		contentModel: "nothing",
		display: "inline",
	},
	audio: {
		contentModel: "nothing",
		display: "inline",
	},
	track: {
		contentModel: "nothing",
		display: "none",
	},
	map: {
		contentModel: "transparent",
		display: "inline",
	},
	area: {
		contentModel: "nothing",
		display: "none",
	},
	table: {
		contentModel: "",
		display: "table",
	},
	caption: {
		contentModel: "flow",
		display: "table-caption",
	},
	colgroup: {
		contentModel: "",
		display: "table-column-group",
	},
	col: {
		contentModel: "nothing",
		display: "table-column",
	},
	tbody: {
		contentModel: "",
		display: "table-row-group",
	},
	thead: {
		contentModel: "",
		display: "table-header-group",
	},
	tfoot: {
		contentModel: "",
		display: "table-footer-group",
	},
	tr: {
		contentModel: "",
		display: "table-row",
	},
	td: {
		contentModel: "flow",
		display: "table-cell",
	},
	th: {
		contentModel: "flow",
		display: "table-cell",
	},
	form: {
		contentModel: "flow",
		display: "block",
	},
	label: {
		contentModel: "phrasing",
		display: "inline",
	},
	input: {
		contentModel: "nothing",
		display: "inline-block",
	},
	button: {
		contentModel: "phrasing",
		display: "inline-block",
	},
	select: {
		contentModel: "phrasing",
		display: "inline-block",
	},
	datalist: {
		contentModel: "phrasing",
		display: "none",
	},
	optgroup: {
		contentModel: "",
		display: "block",
	},
	option: {
		contentModel: "text",
		display: "block",
	},
	textarea: {
		contentModel: "text",
		display: "inline-block",
	},
	output: {
		contentModel: "phrasing",
		display: "inline",
	},
	progress: {
		contentModel: "phrasing",
		display: "inline-block",
	},
	meter: {
		contentModel: "phrasing",
		display: "inline-block",
	},
	fieldset: {
		contentModel: "flow",
		display: "block",
	},
	legend: {
		contentModel: "phrasing",
		display: "",
	},
	details: {
		contentModel: "flow",
		display: "block",
	},
	summary: {
		contentModel: "phrasing",
		display: "block",
	},
	dialog: {
		contentModel: "flow",
		display: "block",
	},
	script: {
		contentModel: "",
		display: "none",
	},
	noscript: {
		contentModel: "",
		display: "none",
	},
	template: {
		contentModel: "",
		display: "none",
	},
	slot: {
		contentModel: "transparent",
		display: "contents",
	},
	canvas: {
		contentModel: "transparent",
		display: "inline",
	},
};
