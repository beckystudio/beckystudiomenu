import type { Metadata } from "next";
import CatalogoMaquillaje from "@/components/pages/catalogo/CatalogoMaquillaje";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "MAQUILLAJE • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/maquillaje/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "MAQUILLAJE • Becky Studio",
    description:
      "MAQUILLAJE MAQUILLAJE COMPLETO $1000 MAQUILLAJE CON BECKY $1350 MAQUILLAJE DE OJOS $700 MAQUILLAJE DE OJOS CON BECKY $850 MAQUILLAJE PROFESIONAL HALLOWEEN STAFF $1600 MAQUILLAJE PROFESIONAL HALLOWEEN CON BECKY $1800 MAQUILLAJE SENCILLO HALLOWEEN STAFF $1400 MAQUILLAJE SENCILLO HALLOWEEN CON BECKY $1600 MAQUILLAJE SOCIAL PLUS STAFF $1000 MAQUILLAJE SOCIAL PLUS BECKY $1350 MAQUILLAJE VIP STAFF $1100 MAQUILLAJE […]",
    url: "/catalogo/maquillaje/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-04-08T21:40:31+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <CatalogoMaquillaje />
      <WhatsAppButton />
    </>
  );
}
