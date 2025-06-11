import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    extends: [
      "standard",
      "plugin:prettier/recommended", // This disables ESLint rules that conflict with Prettier
      eslintConfigPrettier,
    ],
    languageOptions: { globals: globals.browser },
    rules: {},
    ...pluginJs.configs.recommended,
  },
];
