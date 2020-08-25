"use strict";

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "eslint-config-lddubeau-base/common.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
  ],
  rules: {
    // We should never use "use strict" in TS code.
    "strict": ["error", "never"],
    // The stock rule does not work correctly in TS code.
    "no-unused-vars": "off",
    // The stock rule does not work correctly with TS code. We turned on
    // the TS-specific rule below.
    "no-useless-constructor": "off",
    // The stock rule does not work correctly with TS code. The TS-specific
    // rule is turned on below.
    "no-empty-function": "off",
    // Does not handle overloads well.
    "no-dupe-class-members": "off",
    // The stock rule does not work correctly with TS code.
    "space-before-function-paren": "off",
    // Complains about issues that are not real issues in TS. The TS compiler
    // catches this anyway.
    "no-undef": "off",
    // Duplicates a specialized TS rule.
    "no-use-before-define": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
      },
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        FunctionDeclaration: {
          parameters: "first",
        },
        FunctionExpression: {
          parameters: "first",
        },
        CallExpression: {
          arguments: "first",
        },
        ArrayExpression: "first",
        ObjectExpression: "first",
        ImportDeclaration: "first",
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
        // Ignore properties is definitely necessary to not conflict with the
        // typedef rule we have.
        ignoreProperties: true,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
    ],
    "@typescript-eslint/semi": [
      "error",
      "always",
    ],
    "@typescript-eslint/space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    }],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/typedef": ["error", {
      arrowParameter: false,
      parameter: true,
      propertyDeclaration: true,
      memberVariableDeclaration: true,
    }],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        //
        // If the rules are included literally in this file, then it is very
        // difficult to override anything because there's no logic for combining
        // two settings for the rule @typescript-eslint/tslint/config. Turning a
        // rule off would require relisting all the rules we want to keep.
        //
        // By extracting the file, we can override the rules using tslint's
        // "extends" mechanism.
        //
        // (Also, this does not work unless we use the full name of the package
        // to start the path... sigh...)
        lintFile: "eslint-config-lddubeau-ts/tslint.config.json",
      },
    ],
  },
};
