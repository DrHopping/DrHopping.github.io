module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
    "indent": ["error", "tab"],
    "no-tabs": "off",
    "eqeqeq": "off",
    "no-unmodified-loop-condition": "off",
    "no-extend-native": "off",
    "no-array-constructor": "off"
  }
}
