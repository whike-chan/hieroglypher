<doc>変換器</doc>

<template lang="pug">
  div
    h1.parts-pageTtl 変換器

    // 変換したい文章を入力してください。 enter text to convert
    //- p.tx1 𓇋𓈖𓏏𓇋𓂋 𓏏𓇋𓎡𓋴𓏏 𓏏𓍯 𓎡𓍯𓈖𓆑𓇋𓂋𓏏

    // アムンのご加護を May amun be with you
    //- p.tx2 𓅓𓄿𓇋 𓄿𓅓𓅱𓈖 𓃀𓇋 𓅱𓇋𓏏𓎛 𓇋𓍯𓅱

    p 変換したい文字を入力してみてください
    p.input-wrap
      input.input(type="text" placeholder="" v-model="inputText")
      span.input-line

    // 注意事項
    ul.notes
      li.notes-item ※ひらがな・カタカナ・アルファベットに対応しています
      li.notes-item ※対応していない文字（漢字や空白など）は、そのまま出力されます

    .down ↓

    // 変換結果
    .result-description
      p 変換結果
      button.result-copy(type="button" @click="copy") コピー
    p#js_result.result {{ convertedText }}

    // 変換過程詳細
    p 詳しく

    // 注意事項
    ul.notes
      li.notes-item ※フォントの関係で、ヒエログリフ以外の文字を入力するとでっかく表示されると思います
      li.notes-item ※もしヒエログリフが表示されない場合は、お使いの端末にフォントが無いことが原因かもしれません。お手数ですが、他のスマホやパソコンで試してみてください
</template>

<style lang="stylus" scoped>
.tx1,.tx2
  font-size 3.2rem

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
    margin 16px 0
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

// 注意書き
.notes
  font-size 1.4rem
  &-item
    padding-left 1em
    text-indent -1em

// ↓
.down
  font-size 3rem
  font-weight 700
  text-align center
  padding 16px 0
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

  &-description
    display flex
    align-items center
    justify-content space-between

  // コピーボタン
  &-copy
    color color_base
    font-size 1.4rem
    padding 4px 8px
    background-color color_main
</style>

<script>
import jaconv from 'jaconv'

export default {
  data() {
    return {
      inputText: 'abcd'
    }
  },
  computed: {
    convertedText() {
      let text = this.inputText

      // ワインを水に 的な
      // カタカナは全角に、英数記号は半角に
      text = jaconv.normalize(text)

      // カタカナをひらがなに
      text = jaconv.toHiragana(text)

      // ひらがなをローマ字で半角英文字に
      text = jaconv.toHebon(text)

      // アルファベットを大文字に
      text = text.toUpperCase()

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
  methods: {
    // 結果をクリップボードにコピー
    copy() {
      const text = this.convertedText
      navigator.clipboard.writeText(text)
    }
  }
}
</script>
