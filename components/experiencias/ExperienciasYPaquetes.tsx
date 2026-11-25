import ShapeDivider from "@/components/elementor/ShapeDivider";
import Paquetes from "@/components/paquetes/Paquetes";
import NuevasExperiencias from "./NuevasExperiencias";

/** Sección de dos columnas: nuevas experiencias (izquierda) y paquetes Novias / XV Años (derecha). */
export default function ExperienciasYPaquetes() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-b0e134a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
    >
      <ShapeDivider position="bottom" />
      <div className="elementor-container elementor-column-gap-default">
        <NuevasExperiencias />
        <Paquetes />
      </div>
    </section>
  );
}
