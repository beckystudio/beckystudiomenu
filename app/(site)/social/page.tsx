import type { Metadata } from "next";
import Social from "@/components/pages/social/Social";
import Popup18937 from "@/components/popups/Popup18937";
import Popup18940 from "@/components/popups/Popup18940";
import Popup18943 from "@/components/popups/Popup18943";
import "./page.css";

export const metadata: Metadata = {
  title: {
    absolute: "Social - Bezza Spa • Becky Studio",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/bezza__trashed/social/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Social - Bezza Spa • Becky Studio",
    description: "¡Agenda Ahora!",
    url: "/bezza__trashed/social/",
    siteName: "Becky Studio",
    images: [
      {
        url: "/wp-content/uploads/2024/11/bezza-black1.png",
        width: 3322,
        height: 799,
      },
    ],
    modifiedTime: "2024-11-14T23:18:17+00:00",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <>
      <Social />
      <Popup18937 />
      <Popup18940 />
      <Popup18943 />
    </>
  );
}
