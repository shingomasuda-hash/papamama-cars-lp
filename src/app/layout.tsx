// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GTM_ID, isGtmEnabled } from "@/config/gtm";
import "./globals.css";

// ▼ 本番URLに合わせて変更してください（OGP / canonical の基準）
const SITE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PAPAMAMA CAR'S 東京アウトドアイベント｜相談予約・塗装体験予約",
  description:
    "PAPAMAMA CAR'S 東京初出店。幕張メッセでのアウトドアイベントにて、車の相談予約・塗装体験予約を受付中。予約で入場料チケットを無料でゲット。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "PAPAMAMA CAR'S",
    title: "PAPAMAMA CAR'S 東京アウトドアイベント｜相談予約・塗装体験予約",
    description:
      "東京初出店。幕張メッセでのアウトドアイベントにて、相談予約・塗装体験予約を受付中。",
    // OGP画像はファーストビューを流用（必要に応じて専用画像に差し替え）
    images: [
      {
        url: "/design/section-01-hero.webp",
        width: 1179,
        height: 2941,
        alt: "PAPAMAMA CAR'S 東京アウトドアイベント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAPAMAMA CAR'S 東京アウトドアイベント｜相談予約・塗装体験予約",
    description:
      "東京初出店。幕張メッセでのアウトドアイベントにて、相談予約・塗装体験予約を受付中。",
    images: ["/design/section-01-hero.webp"],
  },
  // favicon は src/app/favicon.ico を Next.js が自動配信。
  // 差し替える場合はそのファイルを置き換えるか、ここで icons を指定する。
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // ピンチズームは許可（アクセシビリティ配慮）
  themeColor: "#1c1c1c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager — <head> 内のなるべく上部で読み込む */}
        {isGtmEnabled && (
          <Script id="gtm-base" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) — <body> 開始直後 */}
        {isGtmEnabled && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
