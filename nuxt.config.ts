// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['~/assets/global.css'],
  target: 'static',
  router: {
    base: '/steezyhelper/'
  }
})
