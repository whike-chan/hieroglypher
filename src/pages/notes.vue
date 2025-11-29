<template lang="pug">
div
  h1.parts-pageTtl 注意事項

  ul.notes
    li.notes-item ひらがな/カタカナ/アルファベットに対応しています
    li.notes-item 対応していない文字（漢字や空白など）は、そのまま出力されます
    li.notes-item ヒエログリフ以外の文字はでっっっかく表示されてしまうと思います
    li.notes-item もしヒエログリフが表示されない場合は、お使いの端末にフォントが無いことが原因かもしれません。お手数ですが、他のスマホやパソコンで試してみてください
    li.notes-item ひらがな/カタカナを入力した場合、ヘボン式ローマ字変換によって思ったとおりに変換されない可能性があります。アルファベットで入力いただくと確実です
</template>

<style scoped>
/* 注意書き */
.notes-item {
  padding-left: 1em;
  text-indent: -1em;
}

.notes-item + .notes-item {
  margin-top: 5px;
}

.notes-item::before {
  content: '・';
}
</style>
