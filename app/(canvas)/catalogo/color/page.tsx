import type { Metadata } from "next";
import CatalogoColor from "@/components/pages/catalogo/CatalogoColor";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "DISEÑO DE COLOR • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/color/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "DISEÑO DE COLOR • Becky Studio",
    description:
      "DISEÑODE COLOR BAÑO DE COLOR $1100 – $1300 CONTORNO Y BAÑO DE COLOR $2200 – $2800 CORONILLA $2600 – $3400 DISEÑO DE COLOR $3300 – $4800 TRANSPARENCIA $3000 – $4150 TINTE COMPLETO $1400 – $2300 RETOQUE DE RAÍZ $1000 – $1200 RETOQUE DE RAÍZ EN DISEÑO $500 PROFUNDIDADEN DISEÑO $750 – $900 RELLENO DE BAÑO […]",
    url: "/catalogo/color/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-04-08T22:07:17+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <CatalogoColor />
      <WhatsAppButton />
    </>
  );
}
