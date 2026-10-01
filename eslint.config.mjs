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
      "unicorn/name-replacements": "off",
      "unicorn/single-line-block-comment-style": "off",
      "unicorn/numeric-separators-style": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
      // plain string sort is intended, and top-level await is not available in the CommonJS scripts
      "unicorn/require-array-sort-compare": "off",
      "unicorn/prefer-await": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: { camelCase: true, kebabCase: true, pascalCase: true },
          // directory names: operator ids use snake_case, tests live in _tests_
          ignore: [/^_tests_$/, /^recruit_/, /^solid_snake$/],
        },
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
