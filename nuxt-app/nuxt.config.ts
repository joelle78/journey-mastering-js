// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client'],
  css: ['assets/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
    },
  },

  compatibilityDate: '2024-08-09',
});