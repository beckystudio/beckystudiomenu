import type { Metadata } from "next";
import CatalogoTratamientos from "@/components/pages/catalogo/CatalogoTratamientos";
import PopupMixologia from "@/components/popups/PopupMixologia";
import PopupTokioSpa from "@/components/popups/PopupTokioSpa";
import Popup20017 from "@/components/popups/Popup20017";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "TRATAMIENTOS • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/catalogo/tratamientos/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "TRATAMIENTOS • Becky Studio",
    description:
      "Your oasis for hair care and self care MIXOLOGÍA CAPILAR HEAD SPA $1,800 Diagnóstico con capilógrafo | Barra de tratamiento personalizado | Ritual con vapor | Mixología capilar | Head spa + Masaje corporal | Crioterapia + Terapia facial TOKIO SPA RITUAL japonés $1,500 Tratamiento capilar profundo + Masaje shiatsu | (Apto para todo tipo […]",
    url: "/catalogo/tratamientos/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/img/Logo_BeckyStudio_Black-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2026-04-09T21:13:41+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <CatalogoTratamientos />
      <PopupMixologia />
      <PopupTokioSpa />
      <Popup20017 />
      <WhatsAppButton />
    </>
  );
}
