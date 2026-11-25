import Heading from "@/components/elementor/Heading";
import { STAR_PATH } from "@/components/elementor/paths";
import PackageBanner from "./PackageBanner";

function Star() {
  return (
    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <path d={STAR_PATH} />
    </svg>
  );
}

/** Columna derecha: "Special occasions packages" con los paquetes de Novias y XV Años (PDF). */
export default function Paquetes() {
  return (
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7ef712b raven-column-flex-vertical"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <Heading id="e299e52">
          <strong data-start="155" data-end="185">
            SPECIAL OCCASIONS{" "}
          </strong>
        </Heading>
        <Heading id="764de34">
          <strong data-start="155" data-end="185">
            Packages
          </strong>
        </Heading>
        <div className="elementor-element elementor-element-daaf2af elementor-widget elementor-widget-rating" data-element_type="widget" data-widget_type="rating.default">
          <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
            <meta itemProp="worstRating" content="0" />
            <meta itemProp="bestRating" content="5" />
            <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Valorado con 5 de 5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="e-icon">
                  <div className="e-icon-wrapper e-icon-marked">
                    <Star />
                  </div>
                  <div className="e-icon-wrapper e-icon-unmarked">
                    <Star />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-68de8fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-widget_type="text-editor.default">
          <h5>
            <b>Ese día no se repite. Haz que cada detalle sea perfecto.</b>
          </h5>
          <p>
            En <b>Becky Studio</b> creamos el peinado y maquillaje que harán de tu gran día algo inolvidable.
          </p>
        </div>
        <PackageBanner
          id="03e3de2"
          title="NOVIAS"
          pdf="/pdf/NOVIAS_2026.pdf"
          image="/img/envato-labs-image-edit-98-500x500.png"
          alt="envato-labs-image-edit (98)"
        >
          Creamos tu peinado y maquillaje para resaltar lo mejor de ti. <br />
          Cuidamos tu piel y cada detalle con los mejores productos para que luzcas espectacular en tu gran día.
        </PackageBanner>
        <PackageBanner
          id="bc9fdb3"
          title="XV AÑOS"
          pdf="/pdf/xvanera_2026.pdf"
          image="/img/envato-labs-image-edit-78-500x500.png"
          alt="envato-labs-image-edit (78)"
        >
          Brilla en tus XV con un maquillaje y peinado pensados para ti.
          <br />
          Luce increíble, con un toque natural y moderno que resalta quién eres sin perder tu estilo.
        </PackageBanner>
      </div>
    </div>
  );
}
