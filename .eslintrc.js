module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    //'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    // 'camelcase': [2, {'properties': 'always'},{'ignoreDestructuring': true}],
    'camelcase': [ 2,
      { ignoreDestructuring: true,
        properties: "never",
        ignoreImports: true,
        allow: ["conf_mail","type_error","verify_access"]
      }
    ],
    'import/prefer-default-export': 'off',
  },
};
