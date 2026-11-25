import Heading from "@/components/elementor/Heading";
import ShapeDivider from "@/components/elementor/ShapeDivider";
import Sucursal from "./Sucursal";
import SucursalesTabs from "./SucursalesTabs";

const MAPA_MONTERREY = "beckystudio, Carr Nacional, Villas La Rioja, La Estanzuela, 64988 Monterrey, N.L.";

/** Sección "Sucursales" con pestañas Monterrey / San Pedro. */
export default function Sucursales() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3c48f54 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
      id="ubicacion"
    >
      <ShapeDivider position="top" />
      <ShapeDivider position="bottom" />
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8d39181" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-b517f65 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8fd5660" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <Heading id="461eaeb">SUCURSALES</Heading>
                    <div
                      className="elementor-element elementor-element-7440e1e raven-advanced-tab-icon-position-right elementor-widget elementor-widget-raven-tabs"
                      data-element_type="widget"
                      data-widget_type="raven-tabs.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="raven-widget-wrapper">
                          <SucursalesTabs
                            tabs={[
                              {
                                n: 1,
                                title: "Monterrey",
                                content: (
                                  <Sucursal
                                    ids={{ template: "16266", section: "56a687b", infoColumn: "55ec042", address: "9d94bf7", button: "4566c95", mapColumn: "f962384", map: "6648f9b" }}
                                    address="Carr Nacional, Villas La Rioja, La Estanzuela, 64988 Monterrey, N.L."
                                    whatsapp="https://wa.link/r5lzzf"
                                    mapQuery={MAPA_MONTERREY}
                                    mapClassName="ed"
                                  />
                                ),
                              },
                              {
                                n: 2,
                                title: "San Pedro",
                                content: (
                                  // Igual que el original (a propósito): muestra el mapa de Monterrey
                                  // y la dirección dice "66220 Monterrey" en lugar de San Pedro.
                                  <Sucursal
                                    ids={{ template: "16217", section: "7ce7851", infoColumn: "8899321", address: "031db2a", button: "85da57d", mapColumn: "f831901", map: "d8cab4c" }}
                                    address={
                                      <>
                                        Río Manzanares 325 col. Del Valle, <br />
                                        66220 Monterrey, N.L.
                                      </>
                                    }
                                    whatsapp="https://wa.link/bl8qpg"
                                    mapQuery={MAPA_MONTERREY}
                                  />
                                ),
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
