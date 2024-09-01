import globals from 'globals';
import js from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'quotes': ['error','single'],
      'prefer-const': 'error',
      'comma-dangle': ['error','always-multiline'],
      'no-useless-concat': 'error',
      'prefer-template': 'error',
    },
  },
];
