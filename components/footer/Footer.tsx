import Heading from "@/components/elementor/Heading";
import Equipo from "./Equipo";

/** Footer: banda del equipo, logo + descripción, "Descubre más", dirección y copyright. */
export default function Footer() {
  return (
    <footer className="jupiterx-footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
      <footer data-elementor-type="footer" data-elementor-id="9539" className="elementor elementor-9539">
        <Equipo />
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-c4271e4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c80fc32" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-46f6c54 elementor-widget elementor-widget-raven-site-logo"
                  data-element_type="widget"
                  data-widget_type="raven-site-logo.default"
                >
                  <div className="elementor-widget-container">
                    <div className="raven-widget-wrapper">
                      <div className="raven-site-logo raven-site-logo-customizer">
                        <a className="raven-site-logo-link" href="./">
                          <picture>
                            <img src="/img/Logo_BeckyStudio_Black-1.png" alt="Becky Studio" data-no-lazy="1" />
                          </picture>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-dbf85f0 elementor-widget elementor-widget-text-editor"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <p>
                    Somos profesionales de la belleza, nuestro equipo está en constante capacitación para brindar el mejor
                    servicio a nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4b83a0f elementor-hidden-mobile"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <Heading id="a7e2eec">Descubre Más</Heading>
                <div
                  className="elementor-element elementor-element-6462c2d elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-element_type="widget"
                  data-widget_type="divider.default"
                >
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"> </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-05e2f41" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <Heading id="f9a540d">
                  64988
                  <br />
                  Carretera Nacional
                  <br />
                  Villas La Rioja
                  <br />
                  La Estanzuela
                  <br />
                  Monterrey, N.L
                </Heading>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-687078b e-con-full e-flex e-con e-parent" data-element_type="container">
          <div className="elementor-element elementor-element-6a2b9df elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
            <img width="1024" height="125" src="/img/White-webtag.svg" className="attachment-large size-large wp-image-20188" alt="" />
          </div>
          <Heading id="45d9423">Copyright 2026. Todos los Derechos Reservados.</Heading>
        </div>
      </footer>
    </footer>
  );
}
