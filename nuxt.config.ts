// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    static: true
  },
  site: {
    name: 'TNT',
    description: null,
    url: 'https://tnt.thombruce.com',
    copyright: 'Copyright © All rights reserved',
    ogComponent: 'TntColor',
    og: {
      website: null,
      color: '#e7000b',
      image: null,
    }
  },
  routeRules: {
    /* Custom route rules */
    '/docs': { redirect: '/docs/getting-started/installation' },
    '/docs/getting-started': { redirect: '/docs/getting-started/installation' },
  },
  runtimeConfig: {
    public: {
      collections: [
        /* Custom content collections */
        'blog',
        'docs',
        'testimonials',
      ],
    },
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
        'neutral',
      ],
    },
  },
  extends: [
    '@thombruce/tnt',
  ],
  modules: [
    /* Custom Modules */
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'bash',
            'html',
            'md',
            'mdc',
            'css',
            'json',
            'yaml',
            'js',
            'ts',
            'vue',
          ]
        },
      }
    }
  },
  i18n: {
    // strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
})
