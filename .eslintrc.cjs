// Updated by trungquandev.com's author on May 13 2023
// Sample Eslint config for React project
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hooks", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": 'warn', // 
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": 0, // không dùng đến
    "react/display-name": 0, // không dùng đến

    // Mui
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*"]
      }
    ],

    // Common
    "no-console": 1, // không console.log trong dự án để khi dev
    "no-lonely-if": 1, // không để if không mà là để else if 
    "no-unused-vars": 1, // không để biến không dùng 
    "no-trailing-spaces": 1, // không để dư khoảng trắng cuối dòng
    "no-multi-spaces": 1, // không để dư khoảng trắng
    "no-multiple-empty-lines": 1, // không để dư dòng trắng
    "space-before-blocks": ["error", "always"], // không để dư khoảng trắng trước dấu ngoặc
    "object-curly-spacing": [1, "always"], // không để dư khoảng trắng trong object
    indent: ["warn", 2], // khoảng cách 2 dấu cách
    semi: [1, "never"], // không để dấu ;
    quotes: ["error", "single"], // dùng dấu nháy đơn
    "array-bracket-spacing": 1, // không để dư khoảng trắng trong mảng
    "linebreak-style": 0, // không để dấu xuống dòng 
    "no-unexpected-multiline": "warn", // không để xuống dòng không mong muốn
    "keyword-spacing": 1, // không để dư khoảng trắng
    'comma-dangle': 1, // không để dấu phẩy cuối
    'comma-spacing': 1, // không để dư khoảng trắng
    'arrow-spacing': 1,
  },
}
