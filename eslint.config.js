const {
    defineConfig,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2019,
        sourceType: "module",
        parserOptions: {},
    },

    extends: compat.extends(
        "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
        prettier: eslintPluginPrettierRecommended,
    },

    rules: {},
}]);
