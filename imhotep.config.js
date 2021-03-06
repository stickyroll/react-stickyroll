const CopyWebpackPlugin = require("copy-webpack-plugin");
const plugins = [new CopyWebpackPlugin([{from: "app/**/*.json", to: "data/", flatten: true}])];

module.exports = {
	app: {
		path: "app"
	},
	entry: "index.tsx",
	env: {
		development: {
			plugins
		},
		production: {
			plugins
		}
	},
	output: {
		path: "public"
	},
	src: {
		path: "src"
	},
	ignore: [
		".yarnrc",
		"package.json",
		"**/CHANGELOG.md",
		"lib/**",
		"dist/**",
		"docs/**",
		"public/**",
		"**/data/*.json",
		"**/package.json",
		"**/CHANGELOG.md",
		"**/lib/**",
		"**/dist/**",
		"**/docs/**",
		"**/public/**"
	]
};
