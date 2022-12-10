module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "unicorn/no-array-reduce": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": 0,
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "prettier/prettier": ['error', { singleQuote: true }],
    "import/prefer-default-export": "off",
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
