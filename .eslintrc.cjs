module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prefer-arrow-functions',
		'plugin:prettier/recommended',
		'plugin:prefer-arrow-functions/recommended',
		'next/core-web-vitals',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'prefer-arrow-functions'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'prefer-arrow-functions': [
			'warn',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'unchanged',
				singleReturnOnly: false,
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
}
