import type { Metadata } from "next";
import CatalogoPeinados from "@/components/pages/catalogo/CatalogoPeinados";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "PEINADO • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/peinados/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "PEINADO • Becky Studio",
    description:
      "PEINADO LAVADO DE CABELLO $250 PEINADO MEDIO RECOGIDO $600 PEINADO MEDIO RECOGIDO CON BECKY $750 PEINADO RECOGIDO $700 PEINADO RECOGIDO CON BECKY $900 PLANCHADO $500 PREP. EXTENSIONES $250 WAVY $550 WAVY ABUNDANTE $600 SECADO $500 SECADO 7 CEPILLOS $600 Precios en pesos mexicanos. Sujeto a cambios sin previo aviso. VOLVER AL CATÁLOGO VOLVER AL CATÁLOGO",
    url: "/catalogo/peinados/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-04-08T21:51:14+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <CatalogoPeinados />
      <WhatsAppButton />
    </>
  );
}
