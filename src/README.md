# ヒエログリファー

ひらがな・カタカナ・英字をヒエログリフへ変換するNuxt 4アプリです。

## 開発

Node.js 24 LTS（24.11.0以上）とnpmを使用します。nvmを使う場合は `nvm use` で `.nvmrc` のバージョンを選べます。
このディレクトリ（`src/`）で実行してください。

```bash
npm ci
npm run dev
```

開発サーバーは http://localhost:3200 です。

## 静的サイトの生成・動作確認

```bash
npm run generate
npx playwright install chromium
npm test
```

`../docs/` にGitHub Pages用のサイトを生成します。変換結果、詳細表示、コピー、クリア、ページ移動・直接アクセス、スマートフォン幅での操作をブラウザーで検証します。
`tests/conversion-cases.json` は依存関係の更新前（Nuxt 4.2.1）のブラウザーで記録した変換結果です。

手元のChromium系ブラウザーを使う場合は、`PLAYWRIGHT_EXECUTABLE_PATH` に実行ファイルのパスを指定できます。

サーバー向けのビルドは `npm run build`、その確認は `npm run preview` です。作業用出力は `.output/`、公開する静的ファイルは `../docs/` に分けています。

## ライブラリの更新

```bash
npm outdated
npm update
npm audit
npm run generate
npm test
```

更新時は `package.json` と `package-lock.json`、再生成した `docs/` を一緒に確認してください。メジャーバージョンを上げる場合は公式の変更点も確認します。
GitHubではpush・pull request時に依存関係の検査、静的生成、ブラウザーテストが自動実行されます。

`docs/` は手編集せず、公開ドメインは `public/CNAME`、GitHub PagesのJekyll無効化は `public/.nojekyll` で維持します。
