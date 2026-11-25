import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NotFoundContent from "@/components/pages/not-found/NotFoundContent";
import PopupSucursales from "@/components/popups/PopupSucursales";
import { PopupProvider } from "@/components/popups/PopupContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./not-found.css";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada • Becky Studio" },
  robots: "noindex, follow",
};

/**
 * 404 global. Next sólo le aplica el layout raíz, así que aquí se arma el mismo "chrome"
 * que el layout (site): header, footer, popup de sucursales y WhatsApp, como en WordPress.
 */
export default function NotFound() {
  return (
    <PopupProvider>
      <a className="jupiterx-a11y jupiterx-a11y-skip-navigation-link" href="#jupiterx-main">
        Skip to content
      </a>
      <div className="jupiterx-site">
        <Header overlap />
        <NotFoundContent />
        <Footer />
      </div>
      <PopupSucursales />
      <WhatsAppButton />
    </PopupProvider>
  );
}
