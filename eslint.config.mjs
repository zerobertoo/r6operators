import tsPlugin from "@typescript-eslint/eslint-plugin"
import unicorn from "eslint-plugin-unicorn"
import prettier from "eslint-config-prettier"

export default [
  {
    ignores: ["node_modules/**", "dist/**", "temp/**", "coverage/**", "packages/*/dist/**"],
  },
  ...tsPlugin.configs["flat/recommended"],
  unicorn.configs["flat/recommended"],
  prettier,
  {
    rules: {
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/numeric-separators-style": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
      "unicorn/filename-case": [
        "error",
        { cases: { camelCase: true, kebabCase: true, pascalCase: true } },
      ],
    },
  },
  {
    files: ["packages/react/**/*.tsx", "packages/react/**/*.ts"],
    rules: {
      "unicorn/no-null": "off",
    },
  },
]
