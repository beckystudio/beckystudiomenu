import EntranceAnimation from "@/components/EntranceAnimation";
import ShapeDivider from "@/components/elementor/ShapeDivider";
import { DOTS_DIVIDER_PATTERN } from "@/components/elementor/paths";
import Carousel from "./Carousel";

/** Sección "¡Bienvenida!" con texto de presentación y carrusel de fotos. */
export default function Bienvenida() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-86522ff elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
    >
      <div className="elementor-background-overlay" />
      <ShapeDivider position="top" shape="split" />
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c732043" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-background-overlay" />
            <div
              className="elementor-element elementor-element-dfe1b92 elementor-widget-divider--separator-type-pattern elementor-widget-divider--no-spacing elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-element_type="widget"
              data-widget_type="divider.default"
            >
              <div className="elementor-divider" style={{ ["--divider-pattern-url" as string]: DOTS_DIVIDER_PATTERN }}>
                <span className="elementor-divider-separator"> </span>
              </div>
            </div>
            <EntranceAnimation
              className="elementor-element elementor-element-0217534 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading"
              animation="zoomIn"
              animationMobile="fadeInDown"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <h2 className="elementor-heading-title elementor-size-default">¡BIENVENIDA!</h2>
            </EntranceAnimation>
            <div
              className="elementor-element elementor-element-83e4463 elementor-widget elementor-widget-text-editor"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div
                className="elementor-element elementor-element-a895eb2 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-marra_core_section_title"
                data-element_type="widget"
                data-widget_type="marra_core_section_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center ">
                    <div className="qodef-main-content">
                      <p className="qodef-m-text">
                        <strong>Nacidos en Monterrey</strong>,<b> BECKYSTUDIO</b>{" "}
                        <em>
                          es el hogar de la creatividad, guiada por una inmensa preocupación por la calidad en un ambiente
                          contemporáneo inspirado en las nuevas tendencias y la naturaleza.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}
