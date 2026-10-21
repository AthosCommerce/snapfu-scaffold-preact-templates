// DO NOT EDIT - THIS FILE CAN/WILL BE REPLACED!!!
// ***********************************************

const tsParser = require("@typescript-eslint/parser");
const tseslint = require("typescript-eslint");
const snapConfigPlugin = require("@athoscommerce/snap-preact/eslintplugin");

module.exports = [
  {
    ignores: [
      "coverage/**",
      "dist/**",
      "**/test/**",
      "**/__test__/**",
      "**/tests/**",
      "**/__tests__/**",
    ],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    // eslint-disable comments are ignored, so the rules below can't be switched off inline
    linterOptions: {
      noInlineConfig: true,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "snap-config": snapConfigPlugin,
    },
    rules: {
      "no-debugger": "error",
      "no-console": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-expect-error": true, "ts-ignore": true, "ts-nocheck": true },
      ],
      // bans `as X` and `<X>value`; `as const` is still allowed
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "never" },
      ],
      "snap-config/validate-config": "error",
    },
  },
  {
    // typed linting for the Snap Templates config: lets validate-config resolve types and squiggle invalid override selectors and props inline
    files: ["src/index.ts", "src/index.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
  },
];