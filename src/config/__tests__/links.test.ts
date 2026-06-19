// src/config/__tests__/links.test.ts
import { describe, it, expect } from "vitest";
import { siteLinks } from "../links";
import { resolveLink, resolveLinkType } from "../linkMap";
import { clickAreas } from "../clickAreas";

const CONSULTATION =
  "https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=tQBGku";
const PAINT =
  "https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=IicQiW";
const INSTAGRAM = "https://www.instagram.com/papamamacars/";
const FACEBOOK = "https://www.facebook.com/papamamacars?locale=ja_JP";
const LINE = "https://line.me/R/ti/p/@189cehbk";

// id -> 期待URL
const EXPECTED: Record<string, string> = {
  "hero-consultation": CONSULTATION,
  "hero-paint-experience": PAINT,
  "what-consultation-listen": CONSULTATION, // まずは説明を聞く
  "what-consultation-reserve": CONSULTATION, // 相談予約をする
  "paint-line-reservation": PAINT, // 塗装体験セクションのLINEから予約
  "bottom-consultation": CONSULTATION,
  "bottom-paint-experience": PAINT,
  "footer-instagram": INSTAGRAM,
  "footer-facebook": FACEBOOK,
  "footer-line": LINE, // 公式LINE（予約用ではない）
};

const allAreas = Object.values(clickAreas).flatMap((a) => a ?? []);

describe("URL一元管理", () => {
  it("links.ts のURLが仕様どおり", () => {
    expect(siteLinks.reservation.consultation).toBe(CONSULTATION);
    expect(siteLinks.reservation.paintExperience).toBe(PAINT);
    expect(siteLinks.social.instagram).toBe(INSTAGRAM);
    expect(siteLinks.social.facebook).toBe(FACEBOOK);
    expect(siteLinks.social.line).toBe(LINE);
  });

  it("予約用LINEと公式LINEが別URLである", () => {
    expect(siteLinks.reservation.paintExperience).not.toBe(
      siteLinks.social.line
    );
    expect(siteLinks.reservation.consultation).not.toBe(siteLinks.social.line);
  });
});

describe("各クリック領域のリンク解決", () => {
  for (const [id, url] of Object.entries(EXPECTED)) {
    it(`${id} → 正しいURL`, () => {
      const area = allAreas.find((a) => a.id === id);
      expect(area, `area ${id} が存在する`).toBeDefined();
      expect(resolveLink(area!.linkKey)).toBe(url);
    });
  }

  it("定義済みの領域は全て期待表に存在する（取りこぼし防止）", () => {
    for (const a of allAreas) {
      expect(EXPECTED[a.id], `${a.id} が期待表にある`).toBeDefined();
    }
  });
});

describe("座標・ラベルの健全性", () => {
  it("全領域に aria-label があり座標が画像内に収まる", () => {
    for (const a of allAreas) {
      expect(a.label.length).toBeGreaterThan(0);
      expect(a.left).toBeGreaterThanOrEqual(0);
      expect(a.top).toBeGreaterThanOrEqual(0);
      expect(a.left + a.width).toBeLessThanOrEqual(100.5);
      expect(a.top + a.height).toBeLessThanOrEqual(100.5);
    }
  });

  it("ソーシャルのlinkTypeはsocial、予約はそれぞれ対応", () => {
    expect(resolveLinkType("instagram")).toBe("social");
    expect(resolveLinkType("facebook")).toBe("social");
    expect(resolveLinkType("line")).toBe("social");
    expect(resolveLinkType("consultation")).toBe("consultation");
    expect(resolveLinkType("paintExperience")).toBe("paintExperience");
  });
});
