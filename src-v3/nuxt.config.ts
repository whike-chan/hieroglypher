// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_TITLE = 'ヒエログリフ変換「ヒエログリファー」'
const BASE_DESCRIPTION =
  '「ヒエログリファー」を使うと、ひらがな・カタカナ・アルファベットをリアルタイムでヒエログリフに変換することができます。'
const BASE_URL = 'https://whike-chan.github.io/hieroglypher/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Global CSS
  css: [
    './assets/css/reset.styl',
    './assets/css/base.styl',
    './assets/css/parts.styl'
  ],

  // Vite configuration for Stylus
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            './assets/css/_var.styl',
            './assets/css/_mixin.styl',
            './assets/css/_colors.styl'
          ]
        }
      }
    }
  },

  // Modules
  modules: ['@vueuse/nuxt'],

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      title: BASE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: BASE_DESCRIPTION
        },
        { property: 'og:url', content: BASE_URL },
        { property: 'og:title', content: BASE_TITLE },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: BASE_DESCRIPTION },
        { property: 'og:image', content: BASE_URL + 'img/ogimage.png' },
        { property: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Development server
  devServer: {
    port: 3200
  }
})
