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
    },
  },


  compatibilityDate: '2024-08-09',
});
