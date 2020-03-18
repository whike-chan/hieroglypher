<template lang="pug">
  .l-wrapper
    header#header.header
      nuxt-link.header-link(to="/") 𓁝
      p.header-text(v-if="!isTop") ヒエログリファー

    nuxt#contents.contents

    footer#footer.footer
      nav
        ul.footer-list
          li.footer-item
            nuxt-link.footer-link(to="/") ヒエログリファー
          li.footer-item
            nuxt-link.footer-link(to="/table") 対応表
          li.footer-item
            nuxt-link.footer-link(to="/notes") 注意事項
          li.footer-item
            nuxt-link.footer-link(to="/story") あらすじ
      p.footer-copy
        small © 2020 whike
</template>

<script>
export default {
  computed: {
    isTop() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="stylus" scoped>
// ラッパー
.l-wrapper
  display grid
  grid-template-rows auto 1fr auto
  grid-template-columns 1fr
  min-height 100vh

#header
  grid-row 1
#contents
  grid-row 2
#footer
  grid-row 3

// header
.header
  text-align center
  margin 0 20px
  padding 15px 0
  border-bottom 1px solid alpha(color_text, .3)
  &-link
    font-size 4rem
    line-height 1
    text-decoration none
  &-text
    font-size 1rem
    letter-spacing 2px
    margin-top 3px

.contents
  width 100%
  max-width 750px
  margin 0 auto
  padding 30px 20px

// footer
.footer
  padding 14px 20px

  // ナビ
  &-list
    display flex
    flex-wrap wrap
    justify-content center
    align-items center
  &-item
    margin-bottom 8px
    &+ .footer-item::before
      content "｜"
      padding 0 5px

  &-link
    text-decoration none
    padding-bottom 1px
    border-bottom 1px solid alpha(color_text, .3)

  // コピーライト
  &-copy
    font-size 14px
    text-align center
    margin-top 8px
    padding-top 12px
    border-top 1px solid alpha(color_text, .3)
</style>
