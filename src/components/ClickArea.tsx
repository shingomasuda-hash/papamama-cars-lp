// src/components/ClickArea.tsx
import type { ClickArea as ClickAreaData } from "@/config/clickAreas";
import { resolveLink, resolveLinkType } from "@/config/linkMap";

type Props = {
  area: ClickAreaData;
};

/**
 * PDF画像の上に重ねる透明な <a>。
 * 位置・サイズはすべて画像に対する % で指定するため、画面幅に追従する。
 */
export default function ClickArea({ area }: Props) {
  const href = resolveLink(area.linkKey);
  const linkType = resolveLinkType(area.linkKey);

  return (
    <a
      id={area.id}
      href={href}
      aria-label={area.label}
      target="_blank"
      rel="noopener noreferrer"
      className="click-area"
      data-link-type={linkType}
      data-link-id={area.id}
      style={{
        left: `${area.left}%`,
        top: `${area.top}%`,
        width: `${area.width}%`,
        height: `${area.height}%`,
      }}
    >
      {/* デバッグ時のみ表示されるラベル（通常時はCSSで非表示） */}
      <span className="click-area__debug" aria-hidden="true">
        {area.id} / {linkType}
      </span>
    </a>
  );
}
