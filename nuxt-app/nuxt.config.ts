export default defineNuxtConfig({
  // Devtools inschakelen
  devtools: { enabled: true },

  // Toevoegen van modules
  modules: ['nuxt-graphql-client'],

  // Voeg CSS-bestanden toe
  css: [
    'assets/main.css', // Bestaand CSS-bestand
    '~/assets/prism-custom.css' // Aangepaste Prism CSS
  ],

  // Applicatie-instellingen
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl', // Stelt de taal in op Nederlands
      },
    },
  },

  // Compatibiliteitsdatum
  compatibilityDate: '2024-08-09',
});
