// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['~/assets/global.css'],
  router: {
    base: process.env.NODE_ENV === 'production' ? '/steezyhelper/' : '/'
  },
  build: {
    publicPath: process.env.NODE_ENV === 'production' ? '/steezyhelper/_nuxt/' : '/_nuxt/'
  },
})
