import Heading from "@/components/elementor/Heading";
import ShapeDivider from "@/components/elementor/ShapeDivider";
import BackgroundVideo from "./BackgroundVideo";

/** Hero con video de fondo: "Expertas en belleza, artistas por naturaleza." */
export default function Hero() {
  return (
    <div className="elementor-element elementor-element-1cd2748 e-flex e-con-boxed e-con e-parent" data-element_type="container">
      <div className="e-con-inner">
        <BackgroundVideo youtubeId="KCVMC-F6S28" />
        <ShapeDivider position="top" />
        <Heading id="cd971e6" tag="h4">
          EXPERTAS EN BELLEZA,
        </Heading>
        <Heading id="fbc5d7e" tag="h4">
          ARTISTAS POR NATURALEZA.
        </Heading>
      </div>
    </div>
  );
}
