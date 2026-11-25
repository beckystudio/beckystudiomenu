import type { ReactNode } from "react";
import PopupSucursales from "@/components/popups/PopupSucursales";
import { PopupProvider } from "@/components/popups/PopupContext";

/**
 * Layout "canvas" (sin header ni footer): catálogo, /m/, quinceañera, padels y registro.
 * Cada página decide si muestra el botón de WhatsApp (como en el sitio original).
 * El popup de sucursales (16044) estaba impreso en todas las páginas de WordPress.
 */
export default function CanvasLayout({ children }: { children: ReactNode }) {
  return (
    <PopupProvider>
      {children}
      <PopupSucursales />
    </PopupProvider>
  );
}
