import type { ReactNode } from "react";
import Heading from "@/components/elementor/Heading";
import RavenButton from "@/components/elementor/RavenButton";

/** ids de Elementor de la plantilla de cada sucursal (el CSS original depende de ellos). */
export type SucursalIds = {
  template: string;
  section: string;
  infoColumn: string;
  address: string;
  button: string;
  mapColumn: string;
  map: string;
};

type Props = {
  ids: SucursalIds;
  address: ReactNode;
  whatsapp: string;
  /** Texto de búsqueda para el iframe de Google Maps. */
  mapQuery: string;
  mapClassName?: string;
};

/** Contenido de una pestaña de sucursal: dirección + botón "Agendar cita" + mapa (oculto en móvil). */
export default function Sucursal({ ids, address, whatsapp, mapQuery, mapClassName }: Props) {
  return (
    <div data-elementor-type="section" data-elementor-id={ids.template} className={`elementor elementor-${ids.template}`}>
      <section
        className={`elementor-section elementor-top-section elementor-element elementor-element-${ids.section} elementor-section-boxed elementor-section-height-default elementor-section-height-default`}
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${ids.infoColumn}`}
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <Heading id={ids.address}>{address}</Heading>
              <RavenButton id={ids.button} className="elementor-align-left elementor-mobile-align-center" text="AGENDAR CITA" href={whatsapp} />
            </div>
          </div>
          <div
            className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${ids.mapColumn}`}
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className={`elementor-element elementor-element-${ids.map} elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-google_maps`}
                data-element_type="widget"
                data-widget_type="google_maps.default"
              >
                <div className="elementor-custom-embed">
                  <iframe
                    className={mapClassName}
                    loading="lazy"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=m&z=10&output=embed&iwloc=near`}
                    title={mapQuery}
                    aria-label={mapQuery}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
