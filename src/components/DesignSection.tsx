// src/components/DesignSection.tsx
import type { SectionImage } from "@/config/sections";
import { clickAreas } from "@/config/clickAreas";
import ClickArea from "./ClickArea";

type Props = {
  section: SectionImage;
};

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
        decoding="async"
        draggable={false}
      />
      {areas.map((area) => (
        <ClickArea key={area.id} area={area} />
      ))}
    </div>
  );
}
