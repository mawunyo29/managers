// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // Will be available on both server and client
    public:{
      baseURL: process.env.BASE_API_URL || 'http://localhost:3000',
      // Will be only available on the server-side
      secretKey: process.env.SECRET_KEY,
      appKey: process.env.APP_KEY,
    }
  },
  ssr: true,
  nitro: {
    routeRules: {
      "^/\/api/\/": { prerender: true },
      "/backend/**": {
        proxy: `${process.env.BASE_API_URL}/**`,
      },
    }
  },
 app: {
  head: {
    title: 'The goal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Application for football management', content: 'The Goal' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'apple-touch-icon', sizes:"57x57", href:"/pwaIcons/apple-icon-57x57.png"},
      {rel:'apple-touch-icon', sizes:"60x60", href:"/pwaIcons/apple-icon-60x60.png"},
      {rel:'apple-touch-icon', sizes:"72x72", href:"/pwaIcons/apple-icon-72x72.png"},
      {rel:'apple-touch-icon', sizes:"76x76", href:"/pwaIcons/apple-icon-76x76.png"},
      {rel:'apple-touch-icon', sizes:"114x114", href:"/pwaIcons/apple-icon-114x114.png"},
      {rel:'apple-touch-icon', sizes:"120x120", href:"/pwaIcons/apple-icon-120x120.png"},
      {rel:'apple-touch-icon', sizes:"144x144", href:"/pwaIcons/apple-icon-144x144.png"},
      {rel:'apple-touch-icon', sizes:"152x152", href:"/pwaIcons/apple-icon-152x152.png"},
      {rel:'apple-touch-icon', sizes:"180x180", href:"/pwaIcons/apple-icon-180x180.png"},
      {rel:'icon', type:"image/png", sizes:"192x192", href:"/pwaIcons/android-icon-192x192.png"},
      {rel:'icon', type:"image/png", sizes:"32x32", href:"/pwaIcons/favicon-32x32.png"},
      {rel:'icon', type:"image/png", sizes:"96x96", href:"/pwaIcons/favicon-96x96.png"},
      {rel:'icon', type:"image/png", sizes:"16x16", href:"/pwaIcons/favicon-16x16.png"},

    ],
    script: [
      { src: '/js/index.js', defer: true , async: true},
      { src: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js' },
    ],
  },
  
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in' // default
  },
  layoutTransition: {
    name: 'slide',
    mode: 'out-in' // default
  },
 },
//  plugins:[ { src: '~/plugins/loadUser', mode: 'server' }],
  components:[
    { path: '~/components', pathPrefix:false},
  ],
  // plugins: [{ src: '~/plugins/loadUser' , mode: 'server'}],
  modules: [
   "@element-plus/nuxt",
   "@pinia/nuxt",
   "@vueuse/nuxt",
   "@nuxt/ui",
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
})