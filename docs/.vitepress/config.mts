import { defineConfig } from 'vitepress'
import components from './../pages.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sky-ui",
  description: "A ui component library for any framework",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('sky-'),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Component', link: '/component/' },
    ],

    sidebar: [
      {
        text: 'Component',
        items: components,
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/skyclouds2001/sky-ui',
      },
    ],
  },
})
