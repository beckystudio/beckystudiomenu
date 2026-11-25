import type { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import PopupSucursales from "@/components/popups/PopupSucursales";
import { PopupProvider } from "@/components/popups/PopupContext";
import SiteHeader from "@/components/site/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Layout "con header y footer" (plantilla elementor_header_footer de JupiterX):
 * home, galería, /social/, promos. El header cambia según la ruta (ver SiteHeader).
 * Los estilos los aporta cada página (su CSS recortado incluye el del header y el footer).
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <PopupProvider>
      <a className="jupiterx-a11y jupiterx-a11y-skip-navigation-link" href="#jupiterx-main">
        Skip to content
      </a>
      <div className="jupiterx-site">
        <SiteHeader />
        {children}
        <Footer />
      </div>
      <PopupSucursales />
      <WhatsAppButton />
    </PopupProvider>
  );
}
