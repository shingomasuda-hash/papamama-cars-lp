# PAPAMAMA CAR'S 東京アウトドアイベント LP

Figmaから書き出した `スマートフォン.pdf`（393×10,088pt / 縦長1ページ）を
**デザインを作り直さず**、高解像度画像として表示し、CTA・SNSアイコンの上に
**透明リンク**を重ねた実装です。

## 方針
- PDFを3倍(216DPI)でWebP化し、無地の行でセクション分割（つなぎ目なし）
- ボタン/アイコンはHTML・CSSで再現せず、画像のまま使用
- リンクは固定pxではなく **画像に対する%** で配置（全画面幅でズレない）
- URLは `src/config/links.ts`、座標は `src/config/clickAreas.ts` に一元管理
- 最大幅393pxで中央表示、394px以上は拡大せず左右を黒で letterbox

## セットアップ
```bash
npm install
npm run dev        # http://localhost:3000/
```

## リンク領域デバッグ
```
http://localhost:3000/?debugLinks=true
```
透明リンクが色付きで可視化されます（通常公開時は完全に透明）。
- オレンジ = 相談予約 / 緑 = 塗装体験予約 / 青 = SNS

## 検証
```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
npm test            # vitest（リンク先・属性・座標の自動テスト）
```

## ビルド不要プレビュー
Node環境がなくても、プロジェクト直下の `standalone-preview.html` を
ブラウザで直接開けば同じ表示を確認できます（`?debugLinks=true` も有効）。

## リンク一覧
| 用途 | URL |
| --- | --- |
| 相談予約（相談予約 / まずは説明を聞く / 相談予約をする） | `…uLand=tQBGku` |
| 塗装体験予約（塗装体験予約 / LINEから予約） | `…uLand=IicQiW` |
| Instagram | instagram.com/papamamacars/ |
| Facebook | facebook.com/papamamacars?locale=ja_JP |
| 公式LINE（Follow Us内・予約用ではない） | line.me/R/ti/p/@189cehbk |

## Google Tag Manager
- コンテナID: `GTM-KPB2C8K`（`src/config/gtm.ts` で一元管理）
- `<head>`上部に計測スニペット、`<body>`直後に `<noscript>` iframe を埋め込み済み（`src/app/layout.tsx`）
- `gtm.ts` の `GTM_ID` がプレースホルダー/不正値のときは読み込まれません（`isGtmEnabled` ガード）
- IDを変更する場合は `src/config/gtm.ts` の1か所だけ書き換えればOK

## 差し替えメモ
- 本番ドメイン: `src/app/layout.tsx` の `SITE_URL`（OGP/canonical基準）
- favicon: `src/app/favicon.ico` を置き換え
- 画像を再生成する場合は元PDFから3倍でWebP化し、`public/design/` を更新
