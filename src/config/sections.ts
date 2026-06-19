// src/config/sections.ts
//
// 分割した各セクション画像のメタデータ。
// width/height は画像の実寸（3倍解像度）。レイアウトシフト防止のため img へ渡す。
// id は clickAreas のキーと一致させること。

export type SectionId =
  | "hero"
  | "consultation"
  | "merit"
  | "paintExperience"
  | "about"
  | "exterior"
  | "flowFaq"
  | "footerSocial";

export type SectionImage = {
  id: SectionId;
  src: string;
  width: number;
  height: number;
  /** ファーストビューのみ true（eager / fetchPriority high） */
  priority: boolean;
};

// 基準横幅（PDF原寸）。レスポンシブの最大幅に使用。
export const BASE_WIDTH = 393;

export const sections: SectionImage[] = [
  { id: "hero", src: "/design/section-01-hero.webp", width: 1179, height: 2941, priority: true },
  { id: "consultation", src: "/design/section-02-consultation.webp", width: 1179, height: 3836, priority: false },
  { id: "merit", src: "/design/section-03-merit.webp", width: 1179, height: 2973, priority: false },
  { id: "paintExperience", src: "/design/section-04-paint-experience.webp", width: 1179, height: 7233, priority: false },
  { id: "about", src: "/design/section-05-event-about.webp", width: 1179, height: 4797, priority: false },
  { id: "exterior", src: "/design/section-06-exterior.webp", width: 1179, height: 2637, priority: false },
  { id: "flowFaq", src: "/design/section-07-flow-faq.webp", width: 1179, height: 4312, priority: false },
  { id: "footerSocial", src: "/design/section-08-footer-social.webp", width: 1179, height: 1535, priority: false },
];
