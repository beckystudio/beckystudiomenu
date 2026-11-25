import HeaderTemplate, { type HeaderIds } from "./HeaderTemplate";
import StickyHeader from "./StickyHeader";

const NORMAL: HeaderIds = {
  template: "9534",
  container: "1e047b9",
  left: "fc7acc4",
  logo: "1d1b605",
  right: "bda2af3",
  social: "97933c6",
  sucursales: "70b8c6d",
  agendar: "faa7114",
};

const STICKY: HeaderIds = {
  template: "9552",
  container: "5f2aa0a",
  left: "d96272f",
  logo: "6c8c40f",
  right: "1f2be37",
  social: "d438fb4",
  sucursales: "08fa418",
  agendar: "6840ab6",
};

/**
 * Header de JupiterX.
 * - "full": plantilla normal + plantilla sticky (se muestra al hacer scroll). Home, promos, 404.
 * - "single": sólo la plantilla 9552, superpuesta al contenido. Galería.
 * `overlap`: el header se superpone al contenido (promos y 404; la galería siempre).
 */
export default function Header({ variant = "full", overlap = false }: { variant?: "full" | "single"; overlap?: boolean }) {
  if (variant === "single") {
    return (
      <StickyHeader offset={100} overlap>
        <HeaderTemplate ids={STICKY} />
      </StickyHeader>
    );
  }
  return (
    <StickyHeader offset={100} overlap={overlap}>
      <HeaderTemplate ids={NORMAL} />
      <HeaderTemplate ids={STICKY} />
    </StickyHeader>
  );
}
