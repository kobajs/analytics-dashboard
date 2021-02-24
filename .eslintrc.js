module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    mocha: true,
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'jest/no-mocks-import': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'no-useless-escape': 'off',
    // more attention
    'react-hooks/exhaustive-deps': 'off',
  },
  globals: {
    setup: 'readonly',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.{js,ts,tsx}'],
      extends: ['plugin:jest/recommended'],
    },
    {
      files: ['**/selenium/**/*.spec.{js,ts,tsx}'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-setup-in-describe': 'off',
        'mocha/no-async-describe': 'off',
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      rules: {
        'jest/no-mocks-import': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off', // we should rethink this rule
        '@typescript-eslint/no-explicit-any': 'off', // we should rethink this rule
      },
    },
  ],
};
