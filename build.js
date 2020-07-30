const { writeFile } = require("fs").promises;
const defaultConfig = require("postcss")([
	require("tailwindcss")("./default.config.js"),
]);
const fullConfig = require("postcss")([
	require("tailwindcss")("./full.config.js"),
]);

var compile = async () => {
	writeFile(
		"./default.css",
		(await defaultConfig.process("@tailwind base;", { from: undefined })).css
	);
	writeFile(
		"./full.css",
		(await fullConfig.process("@tailwind base;", { from: undefined })).css
	);
};

compile();
