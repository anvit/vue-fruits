module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-alert': 'warn',
        camelcase: 'warn',
        curly: 'warn',
        eqeqeq: 'warn',
        'guard-for-in': 'warn',
        'no-empty': 'warn',
        'no-param-reassign': 'warn',
        'no-unused-vars': 'warn',
        quotes: ['warn', 'single'],
        indent: ['warn', 4],
        semi: 'off',
        'space-before-function-paren': 'warn',
        'no-trailing-spaces': 'warn',
        'lines-between-class-members': 'warn',
        'no-async-promise-executor': 'warn',
        'eol-last': 'warn',
        'comma-dangle': 'warn'
    }
}
