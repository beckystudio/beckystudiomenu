import ShapeDivider from "@/components/elementor/ShapeDivider";

/**
 * Banda con la foto del equipo (imagen de fondo definida en el CSS original).
 * En Elementor forma parte de la plantilla del footer, por eso se renderiza dentro de <Footer />.
 */
export default function Equipo() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-ce98796 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
    >
      <ShapeDivider position="top" />
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7f56b4d" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-background-overlay" />
            <div className="elementor-element elementor-element-6606621 elementor-widget elementor-widget-spacer" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
