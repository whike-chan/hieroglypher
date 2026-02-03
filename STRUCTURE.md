# プロジェクト構成まとめ

## 全体像
- Nuxt 4（Vue 3）で作られたヒエログリフ変換Webアプリ。
- ソースコードは `src/` 配下。
- 静的生成の出力先は `docs/`（GitHub Pages想定）。

## ルート直下
- `src/`: Nuxtアプリ本体。
- `docs/`: 生成された静的サイトの成果物。
- `README.md`: プロジェクト概要。
- `_config.yml`: Google Analytics設定。

## アプリ構成（`src/`）

### ルーティング/レイアウト
- `src/app.vue`: `NuxtLayout` と `NuxtPage` の最小シェル。
- `src/layouts/default.vue`: ヘッダー/フッター/ナビを持つ共通レイアウト。

### ページ
- `src/pages/index.vue`: 変換UIを表示するトップページ。
- `src/pages/table.vue`: 変換対応表（A-Zの一覧）。
- `src/pages/notes.vue`: 注意事項ページ。
- `src/pages/story.vue`: 制作背景のストーリー。

### 主要コンポーネント
- `src/components/Conversion.vue`:
  - 入力 → 変換 → 出力の中心UI。
  - `jaconv` で正規化/ローマ字変換。
  - `useHieroglyphs()` のマッピングで置換。
  - クリップボードコピーに対応（`@vueuse/core`）。

### Composables
- `src/composables/useHieroglyphs.ts`: A-Zとヒエログリフの対応表。

### スタイル
- `src/assets/css/variables.css`, `reset.css`, `base.css`, `parts.css`:
  - グローバルCSSとして読み込み。

### 設定/ビルド
- `src/nuxt.config.ts`:
  - `head` にタイトル/OGPなどのメタ情報。
  - `@vueuse/nuxt` と Google Fonts を有効化。
  - 開発サーバーポートは `3200`。
  - Nitroの出力先を `../docs` に指定。

### 依存関係（`src/package.json`）
- 主要: `nuxt`, `vue`, `vue-router`, `jaconv`, `@vueuse/nuxt`, `pug`。
- 開発: `@nuxtjs/google-fonts`。

## 変換フロー（要約）
1. `jaconv.normalize` で入力を正規化。
2. カタカナ → ひらがな。
3. ひらがな → ヘボン式ローマ字。
4. 大文字化。
5. A-Zをヒエログリフに置換。
6. 未対応文字はそのまま出力。

## 補足
- 編集対象は `src/` 側。
- `docs/` はビルド成果物のため手編集しない前提。
