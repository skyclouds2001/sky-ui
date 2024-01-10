import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sky-ui",
  description: "A ui component library for any framework",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Component', link: '/component/' },
    ],

    sidebar: [
      {
        text: 'Component',
        items: [
          {
            text: 'Button',
            link: '/component/button/',
          },
          {
            text: 'Link',
            link: '/component/link/',
          },
          {
            text: 'Text',
            link: '/component/text/',
          },
          {
            text: 'Space',
            link: '/component/space/',
          },
          {
            text: 'Icon',
            link: '/component/icon/',
          },
          {
            text: 'Image',
            link: '/component/image/',
          },
          {
            text: 'Divider',
            link: '/component/divider/',
          },
        ],
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
