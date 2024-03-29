module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module",
    },
    "plugins": ["@typescript-eslint"],
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  
    "rules": {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "quotes": [2, "single", { "avoidEscape": true }] 
    },
  
    "env": {
      "node": true
    }
  }
