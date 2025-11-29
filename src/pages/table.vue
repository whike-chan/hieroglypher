<template lang="pug">
div
  h1.parts-pageTtl 対応表
  table
    tbody
      tr(v-for="(value, key) in hieroglyphs" :key="key")
        td {{ key }}
        td {{ value }}

  p.quote
    cite 引用元:
      a(href="https://gist.github.com/souri-t/3bb9475c2710a55a10e71337d84ce2c3" target="_blank") ヒエログリフ変換表 by総理-Tさん
</template>

<script setup lang="ts">
const { hieroglyphs } = useHieroglyphs()
</script>

<style scoped>
table {
  margin: auto;
}

tr + tr {
  border-top: 1px dashed var(--color-main);
}

tr {
  transition: all 0.2s;
}

tr:hover {
  color: var(--color-base);
  background-color: var(--color-main);
}

tr:hover td::before {
  background-color: var(--color-base) !important;
}

td {
  text-align: center;
  vertical-align: middle;
  padding: 15px 0;
  width: 120px;
}

td:nth-of-type(1) {
  position: relative;
  font-size: 1.8rem;
}

td:nth-of-type(1)::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: -4px;
  margin: auto;
  width: 8px;
  height: 1px;
  background-color: var(--color-text);
  transition: all 0.2s;
}

td:nth-of-type(2) {
  font-size: 2.4rem;
  font-weight: bold;
}

/* 引用 */
.quote {
  margin-top: 2em;
}
</style>
