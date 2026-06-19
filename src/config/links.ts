// src/config/links.ts
//
// すべてのリンクURLをここで一元管理する。
// コンポーネントや clickAreas へ直接URLをベタ書きしないこと。

export const siteLinks = {
  reservation: {
    // 相談予約（相談予約 / まずは説明を聞く / 相談予約はこちら / 相談予約をする）
    consultation:
      "https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=tQBGku",

    // 塗装体験予約（塗装体験予約 / 塗装体験を予約 / 塗装体験セクション内の「LINEから予約」）
    paintExperience:
      "https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=IicQiW",
  },

  social: {
    instagram: "https://www.instagram.com/papamamacars/",
    facebook: "https://www.facebook.com/papamamacars?locale=ja_JP",
    // ページ下部 Follow Us 内の公式LINEアカウント（予約用ではない）
    line: "https://line.me/R/ti/p/@189cehbk",
  },
} as const;
