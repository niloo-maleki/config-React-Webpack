import path from 'path';
import { fileURLToPath } from 'url';
import eslintPluginImport from 'eslint-plugin-import';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import parserTs from '@typescript-eslint/parser';
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';
import tseslint from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import js from '@eslint/js';
import prettierConfig from './prettier.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);

const Configuration = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tseslint,
      import: eslintPluginImport,
      tailwindcss: eslintPluginTailwindCSS,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parser: parserTs,
      parserOptions: {
        project: path.join(rootDir, 'tsconfig.eslint.json'),
        tsconfigRootDir: rootDir,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      semi: ['error', 'always'],
      'prefer-const': 'error',

      'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
      'react/sort-default-props': ['warn', { ignoreCase: true }],

      'import/newline-after-import': ['error', { count: 1 }],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 1 }],

      'import/order': ['error'],

      'prettier/prettier': ['error', prettierConfig],

      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
    },
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
        fragment: 'Fragment',
      },
    },
  },
  {
    files: ['webpack/**/*.js', 'tailwind.config.js'],
    plugins: {
      tailwindcss: eslintPluginTailwindCSS,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'tailwindcss/no-custom-classname': 'warn',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
];

export default Configuration;
