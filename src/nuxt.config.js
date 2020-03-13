// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/hieroglypher/'
  }
} : {}

const BASE_URL = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/hieroglypher/' : '/'

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
    title: 'ヒエログリフ変換「ヒエログリファー」',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '「ヒエログリファー」を使うと、ひらがな・カタカナ・アルファベットをリアルタイムでヒエログリフに変換することができます。'
      },
      { property: 'og:url', content: 'https://whike-chan.github.io/hieroglypher/' },
      { property: 'og:title', content: 'ヒエログリフ変換システム「ヒエログリファー」' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: '「ヒエログリファー」を使うと、ひらがな・カタカナ・アルファベットをリアルタイムでヒエログリフに変換することができます。' },
      { property: 'og:image', content: BASE_URL + 'img/ogimage.png' },
      { property: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: BASE_URL + 'img/icon-16x16.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: BASE_URL + 'img/icon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '48x48', href: BASE_URL + 'img/icon-48x48.png' },
      { rel: 'icon', type: 'image/png', size: '72x72', href: BASE_URL + 'img/icon-72x72.png' },
      { rel: 'icon', type: 'image/png', size: '160x160', href: BASE_URL + 'img/icon-160x160.png' }
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
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources', 'nuxt-webfontloader'],
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
