import type { Metadata } from "next";
import RegistroComplete from "@/components/pages/registro-complete/RegistroComplete";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "Registro Complete • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/registro-complete/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Registro Complete • Becky Studio",
    description:
      "¡Felicidades! Guarda el siguiente cupón, utilízalo en tu siguiente compra y ADQUIERE DESCARGAR CUPÓN AGENDAR CITA",
    url: "/registro-complete/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2025/02/1.png",
        width: 1080,
        height: 1350,
      },
    ],
    modifiedTime: "2025-02-10T18:18:39+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <RegistroComplete />
      <WhatsAppButton />
    </>
  );
}
