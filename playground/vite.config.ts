import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./../src/**/*.{js,jsx,ts,tsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./../src/**/*.{css}',
      },
    }),
  ],
  css: {
    devSourcemap: true,
  },
})
