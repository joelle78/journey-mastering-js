export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-graphql-client'],

  css: [
    'assets/main.css',
    '~/assets/prism-custom.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Jost:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    },
  },

  compatibilityDate: '2024-08-09',
});
