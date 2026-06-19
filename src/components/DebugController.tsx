// src/components/DebugController.tsx
"use client";

import { useEffect } from "react";

/**
 * URLに ?debugLinks=true がある場合のみ <body> に "debug-links" クラスを付与する。
 * これにより透明リンク領域が可視化される（通常公開時は完全に透明）。
 * useSearchParams を使わず window.location から読むため Suspense 不要・全バージョン互換。
 */
export default function DebugController() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isDebug = params.get("debugLinks") === "true";
    if (isDebug) {
      document.body.classList.add("debug-links");
    } else {
      document.body.classList.remove("debug-links");
    }
    return () => {
      document.body.classList.remove("debug-links");
    };
  }, []);

  return null;
}
