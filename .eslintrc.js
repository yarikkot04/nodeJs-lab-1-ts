module.exports = {
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs,ts}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:sonarjs/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'sonarjs'],
    root: true,
}
