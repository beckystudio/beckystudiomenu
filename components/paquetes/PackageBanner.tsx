import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  pdf: string;
  image: string;
  alt: string;
  children: ReactNode;
};

/** Banner "jet-banner" (efecto lily) que abre el PDF del paquete. */
export default function PackageBanner({ id, title, pdf, image, alt, children }: Props) {
  return (
    <div
      className={`elementor-element elementor-element-${id} elementor-widget elementor-widget-jet-banner`}
      data-element_type="widget"
      data-widget_type="jet-banner.default"
    >
      <div className="elementor-widget-container">
        <div className="elementor-jet-banner jet-elements">
          <figure className="jet-banner jet-effect-lily">
            <a href={pdf} className="jet-banner__link" target="_blank">
              <div className="jet-banner__overlay" />
              <img decoding="async" loading="lazy" src={image} alt={alt} width="100%" height="100%" className="jet-banner__img" />
              <figcaption className="jet-banner__content">
                <div className="jet-banner__content-wrap">
                  <h4 className="jet-banner__title">{title}</h4>
                  <div className="jet-banner__text">{children}</div>
                </div>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}
