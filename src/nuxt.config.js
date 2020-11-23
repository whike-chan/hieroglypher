// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/hieroglypher/'
  }
} : {}

const BASE_GH_URL = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/hieroglypher/' : '/'

const BASE_TITLE = 'ヒエログリフ変換「ヒエログリファー」'
const BASE_DESCRIPTION = '「ヒエログリファー」を使うと、ひらがな・カタカナ・アルファベットをリアルタイムでヒエログリフに変換することができます。'
const BASE_URL = 'https://whike-chan.github.io/hieroglypher/'

export default {
  mode: 'universal',
  generate: {
    dir: '../docs'
  },
  ...routerBase,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: BASE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
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
      { rel: 'icon', type: 'image/x-icon', href: BASE_GH_URL + 'favicon.ico' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: BASE_GH_URL + 'img/icon-16x16.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: BASE_GH_URL + 'img/icon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '48x48', href: BASE_GH_URL + 'img/icon-48x48.png' },
      { rel: 'icon', type: 'image/png', size: '72x72', href: BASE_GH_URL + 'img/icon-72x72.png' },
      { rel: 'icon', type: 'image/png', size: '160x160', href: BASE_GH_URL + 'img/icon-160x160.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#009dbf' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/reset.styl',
    '~/assets/css/base.styl',
    '~/assets/css/parts.styl'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/hieroglyphs'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-clipboard2'
  ],
  // Vueから参照したい変数,関数など
  styleResources: {
    stylus: [
      '~/assets/css/_var.styl',
      '~/assets/css/_mixin.styl',
      '~/assets/css/_colors.styl'
    ]
  },
  // GoogleFonts
  webfontloader: {
    google: {
      families: ['M+PLUS+1p:400,700']
    }
  },
  // GoogleAnalytics
  googleAnalytics: {
    id: 'G-7CSD3DHRZP'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  // ポートバッティング回避
  server: {
    port: 3200
  }
}
