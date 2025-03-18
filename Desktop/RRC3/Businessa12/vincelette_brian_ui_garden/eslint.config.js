const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const { FlatCompat } = require('@eslint/eslintrc');
const { fixupConfigRules } = require('@eslint/config-array');

// 创建兼容层以加载传统的推荐配置
const compat = new FlatCompat();

module.exports = [
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        browser: true,
        node: true,
        es2021: true
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },
  // 使用 ESLint 9.x 的推荐配置
  ...fixupConfigRules(compat.config({ extends: ['eslint:recommended'] })),
  ...typescriptEslintPlugin.configs.recommended,
  ...reactPlugin.configs.recommended,
  ...reactHooksPlugin.configs.recommended,
  {
    ignores: ['node_modules/**', 'build/**', 'dist/**', '.storybook/**', 'coverage/**']
  }
];