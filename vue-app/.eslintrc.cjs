/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const path = require('path')

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'standard'
  ],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx'
      ],
      extends: [
        'standard-with-typescript'
      ],
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json')
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    },
    {
      files: [
        'vite.config.*'
      ],
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.node.json')
      }
    }
  ]
}
