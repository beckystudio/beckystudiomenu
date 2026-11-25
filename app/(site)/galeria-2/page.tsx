import type { Metadata } from "next";
import Galeria from "@/components/pages/galeria/Galeria";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "Galería • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/galeria-2/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Galería • Becky Studio",
    description: "Galería Todos Cabello Maquillaje Peinados",
    url: "/galeria-2/",
    siteName: "Becky Studio",
    modifiedTime: "2025-01-15T02:33:14+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <Galeria />
    </>
  );
}
