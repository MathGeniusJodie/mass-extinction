const { writeFile } = require("fs").promises;
const postcss = require("postcss")([require("tailwindcss")]);

var compile = async ()=>{
	writeFile(
		"./style.css",
		(await postcss.process("@tailwind base;", {from: undefined})).css
	);
};

compile();