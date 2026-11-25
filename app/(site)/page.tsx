import type { Metadata } from "next";
import Bienvenida from "@/components/bienvenida/Bienvenida";
import ExperienciasYPaquetes from "@/components/experiencias/ExperienciasYPaquetes";
import Hero from "@/components/hero/Hero";
import PopupMixologia from "@/components/popups/PopupMixologia";
import PopupTokioSpa from "@/components/popups/PopupTokioSpa";
import Sucursales from "@/components/sucursales/Sucursales";

// Estilos del home copiados del sitio original, en el mismo orden en que se cargaban.
// (Fidelidad primero; la limpieza del CSS queda para después.)
import "../styles/site.css";
import "../styles/inline-head.css";
import "../styles/static.css";
import "../styles/inline-body.css";

const TITLE = "Becky Studio • Estudio de Belleza en Monterrey";
const DESCRIPTION =
  "Somos un estudio de belleza a la vanguardia, queremos brindarte la mejor calidad, atención y el resultado que sueñas.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: { canonical: "/" },
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Becky Studio",
    images: ["/img/Diseno-sin-titulo.png"],
  },
  twitter: { card: "summary_large_image" },
};

/** Home. El header, el footer, el popup de sucursales y WhatsApp vienen del layout (site). */
export default function Home() {
  return (
    <>
      <main id="jupiterx-main" className="jupiterx-main">
        <div data-elementor-type="wp-page" data-elementor-id="8141" className="elementor elementor-8141">
          <Hero />
          <Bienvenida />
          <Sucursales />
          <ExperienciasYPaquetes />
        </div>
      </main>
      <PopupMixologia />
      <PopupTokioSpa />
    </>
  );
}
