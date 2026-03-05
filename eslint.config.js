const tsParser = require('@typescript-eslint/parser');

module.exports = [
	{
		ignores: ['coverage/**', 'dist/**', '**/*test*/**', '**/*__test__*/**', '**/*tests*/**', '**/*__tests__*/**'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			'no-debugger': 'error',
			'no-console': 'error',
			'no-magic-numbers': 'off',
		},
	},
];
