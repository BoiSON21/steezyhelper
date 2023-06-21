// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['~/assets/global.css'],
  app: {
    baseURL: '/steezyhelper/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/steezyhelper/favicon.ico' }]
    }
  },
})
