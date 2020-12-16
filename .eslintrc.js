module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		quotes: ['off', 'single'],
		camelcase: 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
};
