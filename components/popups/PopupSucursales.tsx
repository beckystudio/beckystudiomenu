"use client";

import ElementorButton from "@/components/elementor/ElementorButton";
import Heading from "@/components/elementor/Heading";
import PopupShell from "./PopupShell";

/** Popup "Visita tu sucursal favorita" (se abre desde el botón SUCURSALES del header). */
export default function PopupSucursales() {
  return (
    <PopupShell id="16044">
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-24006b8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b68f405"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-background-overlay" />
              <Heading id="e8cd25c">
                VISITA
                <br />
                TU SUCURSAL
                <br /> FAVORITA.
              </Heading>
              <div
                className="elementor-element elementor-element-1a2778e elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                data-element_type="widget"
                data-widget_type="divider.default"
              >
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"> </span>
                </div>
              </div>
              <Heading id="0ee6525">Selecciona tu sucursal...</Heading>
              <ElementorButton
                id="5bb679f"
                className="elementor-mobile-align-justify"
                text="SAN PEDRO GARZA GARCÍA"
                href="https://g.co/kgs/VsZG9K3"
                target="_blank"
              />
              <ElementorButton
                id="a063be1"
                className="elementor-mobile-align-justify"
                text="MONTERREY"
                href="https://g.co/kgs/nuZQiVt"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </PopupShell>
  );
}
