import type { Metadata } from "next";
import CatalogoCejas from "@/components/pages/catalogo/CatalogoCejas";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "DEPILACIÓN • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/cejas/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "DEPILACIÓN • Becky Studio",
    description:
      "DEPILACIÓN AXILA $250 BOZO $250 CEJA $400 PATILLA $300 Precios en pesos mexicanos. Sujeto a cambios sin previo aviso. VOLVER AL CATÁLOGO VOLVER AL CATÁLOGO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    url: "/catalogo/cejas/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-04-08T22:09:53+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <CatalogoCejas />
      <WhatsAppButton />
    </>
  );
}
