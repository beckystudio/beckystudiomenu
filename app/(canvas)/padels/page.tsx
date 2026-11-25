import type { Metadata } from "next";
import Padels from "@/components/pages/padels/Padels";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "Padels | Becky Studio • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/padels/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Padels | Becky Studio • Becky Studio",
    description: "Regístrate y Gana Consigue 10% de Descuento Cualquier servicio, cualquier sucursal.",
    url: "/padels/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1.png",
        width: 2654,
        height: 333,
      },
    ],
    modifiedTime: "2025-02-10T18:19:29+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <Padels />
    </>
  );
}
