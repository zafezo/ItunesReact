module.exports = {
    plugins: [
        'react'
    ],
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb/base'],
    rules: {
        'no-param-reassign': ['error', { 'props': false }]
    },
    env: {
        browser: true,
        jasmine: true,
        mocha: true,
    },
};