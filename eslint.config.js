import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'dist-ssr']),
  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // `motion` is used as <motion.div>, which this rule cannot see.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]|^motion$' }],
    },
  },
  {
    // Build scripts and the API server run in Node, not the browser.
    files: ['scripts/**/*.mjs', 'backend/**/*.js', '*.config.js'],
    languageOptions: { globals: globals.node },
  },
  {
    // These files export helpers next to components on purpose.
    files: ['src/components/ui/Motion.jsx', 'src/entry-server.jsx'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
])
