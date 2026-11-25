import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { BODY_CLASSES } from "@/lib/bodyClasses";

// Cada página importa su propio CSS (el home, la hoja original completa; las demás, sólo lo que usan).

export const metadata: Metadata = {
  metadataBase: new URL("https://beckystudio.mx"),
  title: "Becky Studio",
  icons: {
    icon: [
      { url: "/img/cropped-BECKYSTUDIO-32x32.png", sizes: "32x32" },
      { url: "/img/cropped-BECKYSTUDIO-192x192.png", sizes: "192x192" },
    ],
    apple: "/img/cropped-BECKYSTUDIO-180x180.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Las clases del <body> cambian por página en WordPress y el CSS depende de ellas. El <body> vive en
 * este layout común, así que se aplican con un script mínimo (sin rastreo) antes de que se pinte nada.
 */
const BODY_CLASS_SCRIPT = `(function(){var m=${JSON.stringify(BODY_CLASSES)};var p=location.pathname;if(p.charAt(p.length-1)!=="/")p+="/";document.body.className=Object.prototype.hasOwnProperty.call(m,p)?m[p]:m.__404__;})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body itemScope itemType="http://schema.org/WebPage" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: BODY_CLASS_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
