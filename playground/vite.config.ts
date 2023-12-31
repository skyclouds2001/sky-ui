import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./../src/**/*.{js,jsx,ts,tsx,vue}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./../src/**/*.{vue,css,sass,scss,less,styl,stylus}',
      },
    }),
  ],
  css: {
    devSourcemap: true,
  },
})
