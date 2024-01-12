import { defineConfig } from 'vitepress'

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
            text: 'Container',
            link: '/component/container/',
          },
          {
            text: 'Icon',
            link: '/component/icon/',
          },
          {
            text: 'Scrollbar',
            link: '/component/scrollbar/',
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
