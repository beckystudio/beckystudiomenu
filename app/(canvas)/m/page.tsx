import type { Metadata } from "next";
import LinkInBio from "@/components/pages/m/LinkInBio";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "Social • Becky Studio",
  },
  robots: "noindex, nofollow",
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Social • Becky Studio",
    description:
      "Expertos en Belleza | Artistas por Naturaleza Menú de Servicios SUCURSALES TRATAMIENTOS PROMOS DEL MES Special Occasions Packages NOVIAS XV AÑOS Paola Herrera Súper buen trato y experiencia, ahí me he hecho maquillaje, peinado y corte de cabello y todos me han fascinado, he ido a muchos salones pero este es mi favorito y el […]",
    url: "/m/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/img/Diseno-sin-titulo.png",
        width: 1920,
        height: 1080,
      },
    ],
    modifiedTime: "2025-10-26T10:18:47+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <LinkInBio />
    </>
  );
}
