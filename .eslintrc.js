module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended' // Use 'plugin:vue/recommended' or 'plugin:vue/essential' for Vue 2 projects
    ],
    parserOptions: {
      parser: 'babel-eslint', // Use 'babel-eslint' or '@babel/eslint-parser' for parsing modern JavaScript
    },
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          'singleline': 1,
          'multiline': {
            'max': 1,
            'allowFirstLine': false
          }
        }
      ]
    },
  }
  