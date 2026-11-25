import RavenButton from "@/components/elementor/RavenButton";
import SocialIcons from "./SocialIcons";

/**
 * ids de Elementor de cada plantilla de header. JupiterX renderiza dos copias casi
 * idénticas (normal y sticky) y el CSS original apunta a cada una por id.
 */
export type HeaderIds = {
  template: string;
  container: string;
  left: string;
  logo: string;
  right: string;
  social: string;
  sucursales: string;
  agendar: string;
};

export default function HeaderTemplate({ ids }: { ids: HeaderIds }) {
  return (
    <header data-elementor-type="header" data-elementor-id={ids.template} className={`elementor elementor-${ids.template}`}>
      <div className={`elementor-element elementor-element-${ids.container} e-con-full e-flex e-con e-parent`} data-element_type="container">
        <div className={`elementor-element elementor-element-${ids.left} e-con-full e-flex e-con e-child`} data-element_type="container">
          <div
            className={`elementor-element elementor-element-${ids.logo} elementor-widget elementor-widget-raven-site-logo`}
            data-element_type="widget"
            data-widget_type="raven-site-logo.default"
          >
            <div className="elementor-widget-container">
              <div className="raven-widget-wrapper">
                <div className="raven-site-logo">
                  <a className="raven-site-logo-link" href="./">
                    <picture>
                      <img alt="Becky Studio" data-no-lazy="1" src="/img/cropped-Logo_BeckyStudio_Black-1.png" />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`elementor-element elementor-element-${ids.right} e-con-full e-flex e-con e-child`} data-element_type="container">
          <SocialIcons id={ids.social} />
          <RavenButton
            id={ids.sucursales}
            className="elementor-align-right elementor-hidden-mobile"
            text="SUCURSALES"
            popup="16044"
            target="_blank"
          />
          <RavenButton
            id={ids.agendar}
            className="elementor-align-right elementor-mobile-align-center elementor-widget-mobile__width-initial"
            text="AGENDAR CITA"
            href="https://wa.link/an9ep6"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
}
