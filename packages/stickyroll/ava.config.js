export default {
	require: ["ts-node/register/transpile-only"],
	babel: {
		extensions: ["ts", "tsx"]
	},
	files: ["test/**/*.ts", "test/**/*.tsx"]
};
