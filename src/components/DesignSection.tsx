// src/components/DesignSection.tsx
import type { SectionImage } from "@/config/sections";
import { clickAreas } from "@/config/clickAreas";
import ClickArea from "./ClickArea";

type Props = {
  section: SectionImage;
};

/**
 * 1セクション = 1枚のPDF分割画像 + その上の透明リンク。
 * 画像は width:100% / height:auto で表示し、隙間が出ないよう block 表示にする。
 */
export default function DesignSection({ section }: Props) {
  const areas = clickAreas[section.id] ?? [];

  return (
    <div className="design-section">
      <img
        src={section.src}
        alt=""
        width={section.width}
        height={section.height}
        loading={section.priority ? "eager" : "lazy"}
        // React 18.3+/Next 14 で有効。FV画像を優先取得する。
        fetchPriority={section.priority ? "high" : "auto"}
        decoding="async"
        draggable={false}
      />
      {areas.map((area) => (
        <ClickArea key={area.id} area={area} />
      ))}
    </div>
  );
}
