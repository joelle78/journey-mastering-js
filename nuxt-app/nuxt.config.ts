// nuxt.config.ts
export default defineNuxtConfig({
  // Schakel devtools in voor ontwikkelingsdoeleinden
  devtools: { enabled: true },

  // Modules die je project uitbreiden
  modules: [
    'nuxt-graphql-client',
    // Voeg hier eventuele andere modules toe
  ],

  // Globale CSS-bestanden
  css: [
    '@/assets/main.css', // Gebruik '@/' als alias voor de root map
    '@/assets/prism-custom.css', // Consistentie in padnotatie
  ],

  // Configuratie van de applicatie
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      link: [
        // Optimaliseer externe bronnen door preconnect en preload toe te voegen
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        // Gebruik preload voor de belangrijkste stylesheet om deze sneller te laden
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Jost:ital,wght@0,100..900;1,100..900&display=swap' }
      ],
      // Voeg eventueel andere head-configuraties toe zoals meta-tags, scripts, etc.
    },
  },

  // Instellingen voor compatibiliteit en andere projectinstellingen
  compatibilityDate: '2024-08-09',

  // Overweeg om hier environment-specific configuraties toe te voegen indien nodig
  runtimeConfig: {
    public: {
      // Publieke runtime-configuratie, indien van toepassing
    },
    private: {
      // Private runtime-configuratie, indien van toepassing
    }
  },

  // Extra configuraties en optimalisaties
  build: {
    // Optimalisaties voor de build
    extractCSS: true, // CSS extraheren in aparte bestanden
    optimizeCSS: true, // CSS optimaliseren
    transpile: [], // Voeg hier eventueel extra transpileren configuraties toe
  },

  // Performance optimalisaties
  performance: {
    // Bijvoorbeeld, het inschakelen van HTTP/2 server push, enz.
    http2: true,
  },
});
