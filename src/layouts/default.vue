<template lang="pug">
  .l-wrapper
    header#header.header
      nuxt-link.header-link(to="/") 𓁝
      p.header-text なんちゃってヒエログリファー
    nuxt#contents.contents
    footer#footer.footer
      nav
        ul.footer-list
          li.footer-item
            nuxt-link.footer-link(to="/") 変換器
          li.footer-item
            nuxt-link.footer-link(to="/table") 対応表
      p.footer-copy
        small © 2020 whike
</template>

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

// header のちのち移動
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
  padding 40px 20px

// footer のちのち移動
.footer
  padding 14px 20px

  // ナビ
  &-list
    display flex
    justify-content center
    align-items center
  &-item + .footer-item::before
    content "｜"
    padding 0 5px

  // コピーライト
  &-copy
    font-size 14px
    text-align center
    margin-top 12px
    padding-top @margin-top
    border-top 1px solid alpha(color_text, .3)
</style>
