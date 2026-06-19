// src/config/clickAreas.ts
//
// 透明リンク領域の座標。すべて「その領域が乗っている分割画像」に対する % で管理する。
// 固定pxではなく % なので、どの画面幅でも画像と同じ比率で拡大縮小される。
//
// 座標は PDF を3倍解像度（1179px幅）で画像化し、ボタン/アイコンの背景全体を
// 色・輝度検出で実測して算出したもの（目視のみで決めていない）。

import type { SectionId } from "./sections";
import type { LinkKey } from "./linkMap";

export type ClickArea = {
  id: string;
  /** スクリーンリーダー用ラベル */
  label: string;
  linkKey: LinkKey;
  /** 以下4つは「対象画像」に対する割合(%) */
  left: number;
  top: number;
  width: number;
  height: number;
};

// セクションIDごとのクリック領域
export const clickAreas: Partial<Record<SectionId, ClickArea[]>> = {
  // 01 ヒーロー上部の予約CTAペア
  hero: [
    {
      id: "hero-consultation",
      label: "LINEで相談予約をする",
      linkKey: "consultation",
      left: 8.142,
      top: 95.58,
      width: 38.846,
      height: 4.046,
    },
    {
      id: "hero-paint-experience",
      label: "LINEで塗装体験を予約する",
      linkKey: "paintExperience",
      left: 53.181,
      top: 95.58,
      width: 38.846,
      height: 4.046,
    },
  ],

  // 02 WHAT WE CAN（何を相談できるの？）内の相談予約CTA（どちらも相談予約）
  consultation: [
    {
      id: "what-consultation-listen", // 「まずは説明を聞く」
      label: "LINEで相談予約をする（まずは説明を聞く）",
      linkKey: "consultation",
      left: 8.142,
      top: 67.857,
      width: 83.885,
      height: 3.102,
    },
    {
      id: "what-consultation-reserve", // 「相談予約をする」
      label: "LINEで相談予約をする",
      linkKey: "consultation",
      left: 8.142,
      top: 72.862,
      width: 83.885,
      height: 3.102,
    },
  ],

  // 04 塗装体験セクション内の「LINEから予約」（塗装体験予約へ）
  paintExperience: [
    {
      id: "paint-line-reservation",
      label: "LINEで塗装体験を予約する",
      linkKey: "paintExperience",
      left: 8.142,
      top: 80.257,
      width: 83.885,
      height: 1.645,
    },
  ],

  // 07 FAQ下の予約CTAペア
  flowFaq: [
    {
      id: "bottom-consultation",
      label: "LINEで相談予約をする",
      linkKey: "consultation",
      left: 8.397,
      top: 82.862,
      width: 38.846,
      height: 2.76,
    },
    {
      id: "bottom-paint-experience",
      label: "LINEで塗装体験を予約する",
      linkKey: "paintExperience",
      left: 53.435,
      top: 82.862,
      width: 38.846,
      height: 2.76,
    },
  ],

  // 08 フッター Follow Us のSNSアイコン
  footerSocial: [
    {
      id: "footer-instagram",
      label: "PAPAMAMA CARSのInstagramを見る",
      linkKey: "instagram",
      left: 20.356,
      top: 71.075,
      width: 17.218,
      height: 13.29,
    },
    {
      id: "footer-facebook",
      label: "PAPAMAMA CARSのFacebookを見る",
      linkKey: "facebook",
      left: 41.9,
      top: 71.01,
      width: 16.964,
      height: 13.029,
    },
    {
      id: "footer-line",
      label: "PAPAMAMA CARSの公式LINEを開く",
      linkKey: "line",
      left: 63.189,
      top: 70.814,
      width: 17.472,
      height: 13.42,
    },
  ],
};
