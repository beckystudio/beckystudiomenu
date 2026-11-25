import ElementorButton from "@/components/elementor/ElementorButton";
import Heading from "@/components/elementor/Heading";
import HostedVideo from "@/components/elementor/HostedVideo";

const TEXT_PATH = "HAIR GLOW | HAIR GLOW | HAIR GLOW";

/** Columna izquierda: "Conoce nuestras nuevas experiencias" (botones a popups + video). */
export default function NuevasExperiencias() {
  return (
    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-245e77f" data-element_type="column">
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-1f9253e elementor-widget elementor-widget-text-path"
          data-element_type="widget"
          data-widget_type="text-path.default"
        >
          <div className="e-text-path elementor-animation-buzz-out" data-text={TEXT_PATH} data-link-url="">
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="42.4994" viewBox="0 0 250 42.4994">
              <path d="M0,42.2494C62.5,42.2494,62.5.25,125,.25s62.5,41.9994,125,41.9994" id="e-path-1f9253e" />
              <path d="M-41.6693,49.25" />
              <path d="M-208.3307-6.75" />
              <text>
                <textPath id="e-text-path-1f9253e" href="#e-path-1f9253e" startOffset="0%">
                  {TEXT_PATH}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <Heading id="4563889">CONOCE NUESTRAS</Heading>
        <Heading id="4f04171">NUEVAS EXPERIENCIAS</Heading>
        <ElementorButton id="8368f19" className="elementor-mobile-align-center" text="MIXOLOGÍA CAPILAR" popup="19750" />
        <ElementorButton id="bd73b44" className="elementor-mobile-align-center" text="TOKIO SPA" popup="19739" />
        <div
          className="elementor-element elementor-element-adb4d38 elementor-widget elementor-widget-video"
          data-element_type="widget"
          data-widget_type="video.default"
        >
          <HostedVideo src="/video/1025.mp4" poster="/img/envato-labs-image-edit-59-1.png" loop />
        </div>
      </div>
    </div>
  );
}
