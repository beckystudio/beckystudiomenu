import type { Metadata } from "next";
import Landing from "@/components/m2/Landing";
import "@/styles/tokens.css";

export const metadata: Metadata = {
  title: { absolute: "Becky Studio • Estudio de Belleza en Monterrey" },
  description:
    "Somos un estudio de belleza a la vanguardia, queremos brindarte la mejor calidad, atención y el resultado que sueñas.",
  // Página de prueba: que no la indexen los buscadores.
  robots: { index: false, follow: false },
};

/** /m2/ — prueba de página con la estructura de axeldejose.com, adaptada a Becky Studio. */
export default function M2Page() {
  return <Landing />;
}
