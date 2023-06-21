// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv'

const isGitHubPages = process.env.DEPLOY_ENV === 'GH_PAGES'
const baseUrl = process.env.BASE_URL || '/'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['~/assets/global.css'],
  app: {
    baseURL: isGitHubPages? baseUrl : '/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: isGitHubPages? baseUrl + 'favicon.ico' : '/favicon.ico' }]
    }
  },
})
