"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";

/**
 * Header del layout "con header y footer". En WordPress cada página elegía su plantilla de header:
 * la galería usa sólo la plantilla sticky superpuesta, las promos superponen el header al
 * contenido y /social/ no tiene header.
 */
const VARIANT_BY_PATH: Record<string, "full" | "single" | "none"> = {
  "/galeria-2/": "single",
  "/social/": "none",
};

export default function SiteHeader() {
  const pathname = usePathname();
  const variant = VARIANT_BY_PATH[pathname] ?? "full";
  if (variant === "none") return null;
  return <Header variant={variant} overlap={pathname.startsWith("/promo/")} />;
}
