module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended'
    // 'plugin:vue-pug/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: ['error', 'always'],
    curly: ['error', 'multi-line'],
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    'no-multi-spaces': ['warn', {
      ignoreEOLComments: true,
      exceptions: { VariableDeclarator: true, Property: true }
    }],
    'comma-dangle': ['error', { arrays: 'never', objects: 'never', imports: 'never' }],
    'comma-spacing': ['warn', { before: false, after: true }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'vue/multi-word-component-names': ['warn', { ignores: ['List', 'Create', 'index'] }],
    'space-infix-ops': ['warn'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }]
  }
};
