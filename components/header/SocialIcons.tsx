import { Fragment } from "react";
import { FACEBOOK_PATH, INSTAGRAM_PATH, TIKTOK_PATH } from "@/components/elementor/paths";

const NETWORKS = [
  { key: "facebook", label: "Facebook", item: "0f3163b", href: "https://facebook.com/beckystudiomx", viewBox: "0 0 512 512", d: FACEBOOK_PATH },
  { key: "instagram", label: "Instagram", item: "59a0b1b", href: "https://instagram.com/beckystudiomx", viewBox: "0 0 448 512", d: INSTAGRAM_PATH },
  { key: "tiktok", label: "Tiktok", item: "cb3e943", href: "https://www.tiktok.com/@beckystudiomx", viewBox: "0 0 448 512", d: TIKTOK_PATH },
];

/** Widget "social-icons" del header (oculto en móvil). */
export default function SocialIcons({ id }: { id: string }) {
  return (
    <div
      className={`elementor-element elementor-element-${id} e-grid-align-right elementor-hidden-mobile elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons`}
      data-element_type="widget"
      data-widget_type="social-icons.default"
    >
      <div className="elementor-social-icons-wrapper elementor-grid" role="list">
        {/* Los espacios entre elementos son intencionales: los íconos son inline-block y,
            como en el HTML original, ese espacio forma parte de la separación visual. */}
        {NETWORKS.map((n, i) => (
          <Fragment key={n.key}>
            {i > 0 ? " " : null}
            <span className="elementor-grid-item" role="listitem">
              {" "}
              <a
                className={`elementor-icon elementor-social-icon elementor-social-icon-${n.key} elementor-repeater-item-${n.item}`}
                href={n.href}
                target="_blank"
              >
                {" "}
                <span className="elementor-screen-only">{n.label}</span>{" "}
                <svg aria-hidden="true" className={`e-font-icon-svg e-fab-${n.key}`} viewBox={n.viewBox} xmlns="http://www.w3.org/2000/svg">
                  <path d={n.d} />
                </svg>
              </a>{" "}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
