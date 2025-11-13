module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-native", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-native/no-inline-styles": "warn",
    "react-native/no-unused-styles": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^", "varsIgnorePattern": "^" }
    ]
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};