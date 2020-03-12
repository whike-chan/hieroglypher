// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/hieroglypher/'
  }
} : {}

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
    // ja
    htmlAttrs: {
      lang: 'ja'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
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
