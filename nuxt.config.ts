// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    [
      "@nuxtjs/i18n",
      {
        defaultLocale: "en",
        // defaultDirection: "rtl",
        langDir: "./locales/",
        locales: [
          {
            file: "en.js",
            code: "en",
            iso: "en-CA",
            name: "English",
            dir: "ltr",
          },
          {
            file: "ar.js",
            code: "ar",
            iso: "ar-EG",
            name: "Arabic",
            dir: "rtl",
          },
        ],
      },
    ],
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://api.example.com/",
      envMode: process.env.envMode || "dev",
    },
  },
  css: ["assets/css/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  routeRules: {
    "/business-analysis": { ssr: false },
    "/ar/business-analysis": { ssr: false },
  },
});
