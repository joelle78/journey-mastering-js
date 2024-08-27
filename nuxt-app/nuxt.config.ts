// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-graphql-client',
  ],

  css: [
    '@/assets/main.css',
    '@/assets/prism-custom.css',
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
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2024-08-09',

  runtimeConfig: {
    public: {
    },
    private: {
    }
  },

  build: {
    extractCSS: true, // CSS extraheren in aparte bestanden
    optimizeCSS: true, // CSS optimaliseren
    transpile: [],
  },

  performance: {
    http2: true,
  },
});
