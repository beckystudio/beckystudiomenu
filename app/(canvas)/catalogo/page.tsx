import type { Metadata } from "next";
import Catalogo from "@/components/pages/catalogo/Catalogo";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "CATÁLOGO • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "CATÁLOGO • Becky Studio",
    description:
      "CATÁLOGO DE SERVICIOS DISEÑO DE COLOR CORTE TRATAMIENTOS MAQUILLAJE PEINADO DEPILACIÓN Novias XV AÑOS REGRESAR A SOCIAL",
    url: "/catalogo/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-07-13T09:03:04+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <Catalogo />
      <WhatsAppButton />
    </>
  );
}
