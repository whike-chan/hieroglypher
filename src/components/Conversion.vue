<template lang="pug">
  div
    h1.parts-pageTtl ヒエログリファー

    .parts-txBtn2col
      p.tx-2col 入力
      button.parts-txBtn2col-btn(type="button" @click="inputText = ''") クリア
    p.input-wrap
      input.input(type="text" placeholder="" ref="inputText" v-model="inputText")
      span.input-line

    .down ↓

    .parts-txBtn2col
      p 結果
      button.parts-txBtn2col-btn.copy(type="button" @click="copy") コピー
        transition(name="copied" @after-enter="copiedAfter")
          span.copy-deco(v-show="isCopied") 𓀬
    p#js_result.result {{ convertedText }}

    // 変換過程詳細
    button.detail(type="button" @click="isOpenDetail = !isOpenDetail" :class="{'is-open': isOpenDetail}")
      |変換の詳細を見る
    transition(name="detail")
      div(v-show="isOpenDetail")
        dl.detail-list
          dt.detail-term 元の文字
          dd {{ inputText }}

        dl.detail-list
          dt.detail-term 変換対象のアルファベット
          dd {{ hebonText }}
</template>

<script>
import jaconv from 'jaconv'

export default {
  data() {
    return {
      inputText: 'Hello world',
      hebonText: '',

      isCopied: false,
      isOpenDetail: false
    }
  },
  computed: {
    convertedText() {
      let text = this.inputText

      text = this.organizeText(text)

      // 配列にして、ヒエログリフと照らし合わせながら変換
      const arr = text.split('')
      const arrConverted = []
      arr.forEach((e) => {
        if (this.$hieroglyphs[e]) {
          arrConverted.push(this.$hieroglyphs[e])
        } else {
          arrConverted.push(e)
        }
      })

      // 結合・出力
      text = arrConverted.join('')
      return text
    }
  },
  mounted() {
    // 初期フォーカス
    this.$refs.inputText.focus()
  },
  methods: {
    // テキストキレイキレイ
    organizeText(text) {
      // カタカナは全角に、英数記号は半角に
      text = jaconv.normalize(text)

      // カタカナをひらがなに
      text = jaconv.toHiragana(text)

      // ひらがなをローマ字で半角英文字に
      text = jaconv.toHebon(text)

      // アルファベットを大文字に
      text = text.toUpperCase()
      this.hebonText = text

      return text
    },

    // 結果をクリップボードにコピー
    copy() {
      const text = this.convertedText
      this.$copyText(text)
      this.isCopied = true
    },
    // コピーアニメ用
    copiedAfter() {
      this.isCopied = false
    }
  }
}
</script>

<style lang="stylus" scoped>
// 入力エリア
.input
  width 100%
  font-weight 700
  text-align center
  padding 10px
  background-color #fff
  // ラッパー
  &-wrap
    position relative
    margin-top 16px
  // 装飾線
  &-line
    position absolute
    left 0
    right 0
    bottom -1px
    width 0
    height 2px
    margin auto
    background-color color_main
    transition all .2s
  &:focus ~ .input-line
    width 100%

// ↓
.down
  font-size 3rem
  text-align center
  padding 15px 0
  color color_accent

// 結果
.result
  position relative
  font-size 3.6rem
  text-align center
  line-height 1.2
  word-break break-all
  margin 16px 0
  padding 10px 0
  border-top 1px solid alpha(color_text, .3)
  border-bottom @border-top

// コピー
.copy
  position relative
  // クリック時装飾
  &-deco
    position absolute
    top 0
    right 0
    left 0
    margin auto
    width 1em
    font-size 3rem
    font-weight 400
    line-height 1
    color color_main
    transform translateY(-30px)

// コピーアニメ
.copied
  &-enter
    transform translateY(0)
    opacity 1
  &-enter-active
    transition all .1s linear
  &-leave-to
    opacity 0
  &-leave-active
    transition all 1.5s ease-in

// 変換の詳細
.detail
  &::before
    content '▶'
    color color_main
    display inline-block
    vertical-align top
    margin-right 3px
    transition transform .1s
    transform-origin center
  &.is-open::before
    transform rotate(90deg) translateX(-2px)
  &-list
    display flex
  &-term::after
    content '：'
</style>
