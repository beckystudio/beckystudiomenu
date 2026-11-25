import type { Metadata } from "next";
import CatalogoCorte from "@/components/pages/catalogo/CatalogoCorte";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "CORTE • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/corte/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "CORTE • Becky Studio",
    description:
      "CORTE CORTE $850 CORTE CON BECKY $1200 CORTE CABALLERO $700 DESPUNTE RECTO $500 LIMPIEZA DE PUNTAS $500 FLECO $400 Precios en pesos mexicanos. Sujeto a cambios sin previo aviso. VOLVER AL CATÁLOGO VOLVER AL CATÁLOGO",
    url: "/catalogo/corte/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-04-08T20:50:51+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <CatalogoCorte />
      <WhatsAppButton />
    </>
  );
}
