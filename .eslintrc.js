module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'no-unsanitized', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/prefer-readonly': [2],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'consistent-return': 0,
    'no-return-assign': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'import/extensions': 0,
    'react/no-danger': 2,
    'react/no-array-index-key': 0,
    'react/display-name': 0,
    'no-restricted-globals': 0,
    'react/prop-types': 0,
    'react/no-danger-with-children': 2,
    'no-return-await': 0,
    'no-unsanitized/method': 2,
    'no-unsanitized/property': 2,
    'no-nested-ternary': 0,
    'no-case-declarations': 0,
    'no-shadow': 0,
    'no-restricted-syntax': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/prefer-default-export': 0,
    'import/no-named-default': 0,
    'import/no-extraneous-dependencies': 0,
    // TODO: return this to 1 after testing
    'no-alert': 0,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
