// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  future: { compatibilityVersion: 4 },

  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss"],

  components: true,

  css: ["~/assets/css/tokens.css"],

  runtimeConfig: {
    contactEmail: "",
    public: {
      whatsappNumber: "254700000000",
    },
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
        },
      ],
    },
  },

  devtools: { enabled: true },
});