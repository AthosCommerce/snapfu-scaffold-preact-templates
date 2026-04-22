const tsParser = require('@typescript-eslint/parser');
const snapConfigPlugin = require('./eslint-rules/index.cjs');

module.exports = [
	{
		ignores: ['coverage/**', 'dist/**', '**/*test*/**', '**/*__test__*/**', '**/*tests*/**', '**/*__tests__*/**'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
		},
		plugins: {
			'snap-config': snapConfigPlugin,
		},
		rules: {
			'no-debugger': 'error',
			'no-console': 'error',
			'no-magic-numbers': 'off',
			'snap-config/validate-result-component': 'error',
		},
	},
];
