module.exports = (api) => {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: [
			[
				'@babel/preset-env',
				{
					modules: false,
					useBuiltIns: 'usage',
					corejs: '3.48',
				},
			],
			['@babel/preset-react'],
		],
		plugins: [
			['@babel/plugin-transform-runtime'],
			[
				'@babel/plugin-transform-react-jsx',
				{
					pragma: 'h',
					pragmaFrag: 'Fragment',
				},
			],
			['@babel/plugin-transform-arrow-functions'],
		],
	};
};
