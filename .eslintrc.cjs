/**
 
 * The cjs(common javascript file) .eslintrc  file is configuration sets up ESLint to enforce coding standards based practices, specially tailored(উপযোগী) for projects using react. Here's an overview:

root: Indicates that this configuration is the root ESLint configuration, meaning it should be applied to the entire project.

env: Specifies the environments where the JavaScript code will run. In this case, it's configured for browser and ECMAScript 2020 (ES11).

extends: Specifies the configurations to extend. It includes ESLint's recommended rules, recommended rules for React, JSX runtime plugin for React, and recommended rules for React hooks.

ignorePatterns: Specifies patterns to ignore during linting. Files matching these patterns won't be linted.

parserOptions: Specifies parser options such as the ECMAScript version and the module source type.

settings: Specifies settings for specific plugins or environments. In this case, it's setting the React version to 18.2.

plugins: Specifies the ESLint plugins to use. Here, it includes the 'react-refresh' plugin.

rules: Specifies custom ESLint rules and configurations. In this case, it configures a specific rule from the 'react-refresh' plugin, setting its severity level to warning and allowing constant export of components while disabling prop-types validation for React components.
 */

module.exports = {
  root: true,// Indicates that is the root ESLint configuration, is should be applied to the entire(সমগ্র) project
  env: { browser: true, es2020: true },// Specifies the environments where the JavaScript code will run. In this case, It's configured for browser and ECMASCRIPT 2020 (ES11)
  extends: [
    'eslint:recommended',// Use ESLint's recommended rules
    'plugin:react/recommended',// use recommended rules for React
    'plugin:react/jsx-runtime',// use JSX runtime plugin for React
    'plugin:react-hooks/recommended',// use Recommended rules for React hooks
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],   // Specifies patterns to ignore during linting(ঘূর্ণিত)
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, // Specifies parser options (latest ECMAScript version and module source type)
  settings: { react: { version: '18.2' } }, // Specifies settings for React, including the version
  plugins: ['react-refresh'], // Specifies plugins to use (in this case, 'react-refresh')
  rules: {// Specifies custom EsLint rules and configurations
    'react-refresh/only-export-components': [ // Specify rule for react-refresh plugin
      'warn',// Sets the severity level to warning
      { allowConstantExport: true }, // Allows constant export of components
      {"react/prop-types" : "off"} // Disable prop-types validation for React components
    ],
  },
}
