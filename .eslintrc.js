module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "array-callback-return": "warn",
    "import/prefer-default-export": 1,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-vars": "warn",
  },
};
