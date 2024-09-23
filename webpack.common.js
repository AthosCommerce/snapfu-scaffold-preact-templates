const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	stats: {
		modulesSort: 'size',
		modulesSpace: 70,
	},
	plugins: [
		// to disable code splitting, include the following:
		// new webpack.optimize.LimitChunkCountPlugin({
		// 	maxChunks: 1,
		// }),
	],
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
		},
	},
};
