// src/config/linkMap.ts
//
// linkKey から実際のURLを解決する処理。
// clickAreas 側は linkKey だけを持ち、URLはここ経由で取得する。

import { siteLinks } from "./links";

export type LinkKey =
  | "consultation"
  | "paintExperience"
  | "instagram"
  | "facebook"
  | "line";

// デバッグ表示の色分け用カテゴリ
export type LinkType = "consultation" | "paintExperience" | "social";

export const linkMap: Record<LinkKey, string> = {
  consultation: siteLinks.reservation.consultation,
  paintExperience: siteLinks.reservation.paintExperience,
  instagram: siteLinks.social.instagram,
  facebook: siteLinks.social.facebook,
  line: siteLinks.social.line,
};

export const linkTypeMap: Record<LinkKey, LinkType> = {
  consultation: "consultation",
  paintExperience: "paintExperience",
  instagram: "social",
  facebook: "social",
  line: "social",
};

export function resolveLink(key: LinkKey): string {
  return linkMap[key];
}

export function resolveLinkType(key: LinkKey): LinkType {
  return linkTypeMap[key];
}
