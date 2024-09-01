import globals from 'globals';
import js from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-plusplus': 'error',
      'spaced-comment': ['error', 'always'], 
      'no-trailing-spaces': 'error',
      'quote-props': ['error', 'as-needed'],
      'comma-spacing': ['error', { before: false, after: true }],
      'prefer-const': 'error',
    },
  },
];
