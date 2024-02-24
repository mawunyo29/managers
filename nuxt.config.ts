// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // Will be available on both server and client
    public:{
      baseURL: process.env.BASE_API_URL || 'http://localhost:3000',
      // Will be only available on the server-side
      secretKey: process.env.SECRET_KEY,
      apiURL: process.env.API_URL,
    }
  },
  ssr: false,
  nitro: {
    routeRules: {
      "/": { prerender: true },
      "/backend/**": {
        proxy: `${process.env.BASE_API_URL}/**`
      },
    }
  },
  // routeRules: {
  //   '/': { prerender: true },
  //   "/backend/**": {
  //     proxy: `${process.env.BASE_API_URL}/**`
  //   },
  // },
  // Global CSS: https://go.nuxtjs.dev/config-css
  components:[
    { path: '~/components', pathPrefix:false},
  ],
  
  modules: [
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "nuxt-laravel-precognition",
  ]
})