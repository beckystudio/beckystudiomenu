import type { Metadata } from "next";
import Quinceanera from "@/components/pages/quinceanera/Quinceanera";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "Quinceañera • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/quinceanera/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Quinceañera • Becky Studio",
    description:
      "DESCUBRE NUESTROS PAQUETES QUINCEAÑERA VER PAQUETES BÁSICO Incluye ⭐ Pestañas Postizas ⭐ Facial Refrescante ⭐ Maquillaje para XV ⭐ Peinado para XV ⭐ Cuerpo y Colocación de Tocado ⭐ Lipstick nuevo $3,000MXN ESENCIAL Incluye ⭐ Pestañas Postizas ⭐ Facial Refrescante ⭐ Prueba de peinado y maquillaje XV ⭐ Maquillaje para XV ⭐ Peinado para XV […]",
    url: "/quinceanera/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2024/03/QUINCEANERA-LOGO.png",
        width: 1686,
        height: 540,
      },
    ],
    modifiedTime: "2025-07-28T19:53:25+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <Quinceanera />
      <WhatsAppButton />
    </>
  );
}
