// src/config/gtm.ts
//
// Google Tag Manager のコンテナID。
// ▼▼ ここを実際のID（例: "GTM-ABC1234"）に差し替えてください ▼▼
export const GTM_ID = "GTM-KPB2C8K";

// プレースホルダーのまま／不正な値のときは GTM を読み込まない（誤計測・不正リクエスト防止）。
// 正しい "GTM-XXXX" 形式かつ初期プレースホルダーでない場合のみ有効化する。
export const isGtmEnabled =
  /^GTM-[A-Z0-9]+$/.test(GTM_ID) && GTM_ID !== "GTM-XXXXXXX";
