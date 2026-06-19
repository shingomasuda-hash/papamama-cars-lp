// src/app/page.tsx
import { sections } from "@/config/sections";
import DesignSection from "@/components/DesignSection";
import DebugController from "@/components/DebugController";

export default function Home() {
  return (
    <main className="design-page">
      {/* スクリーンリーダー向けの見出し（見た目には影響しない） */}
      <h1 className="sr-only">
        PAPAMAMA CAR&apos;S 東京アウトドアイベント 相談予約・塗装体験予約
      </h1>

      {/* ?debugLinks=true で透明リンク領域を可視化 */}
      <DebugController />

      <div className="design-wrapper">
        {sections.map((section) => (
          <DesignSection key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
