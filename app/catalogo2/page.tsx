import type { Metadata } from "next";
import Catalogo2 from "@/components/catalogo2/Catalogo2";
import "@/styles/tokens.css";

export const metadata: Metadata = {
  title: { absolute: "CATÁLOGO • Becky Studio" },
  // Página de prueba (rediseño de /catalogo/): que no la indexen los buscadores.
  robots: { index: false, follow: false },
};

/** /catalogo2/ — rediseño del índice del catálogo con el diseño de /m2/. */
export default function Catalogo2Page() {
  return <Catalogo2 />;
}
