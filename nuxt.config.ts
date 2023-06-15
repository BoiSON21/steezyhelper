// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['~/assets/global.css'],
  router: {
    base: '/steezyhelper/'
  },
  build: {
    publicPath: '/steezyhelper/_nuxt/'
  },
})
