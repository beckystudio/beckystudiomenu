import type { MetadataRoute } from "next";
import { PROMOS } from "@/lib/promos";

const SITE = "https://beckystudio.mx";

/**
 * Mismo contenido que el sitemap de Yoast en WordPress: páginas + promos.
 * /m/ no aparece porque en el original tiene "noindex" y tampoco estaba en el sitemap.
 * Las fechas son las "lastmod" del sitemap original.
 */
const PAGES: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-03-29T03:18:20+00:00" },
  { path: "/social/", lastModified: "2024-11-14T23:18:17+00:00" },
  { path: "/galeria-2/", lastModified: "2025-01-15T02:33:14+00:00" },
  { path: "/registro-complete/", lastModified: "2025-02-10T18:18:39+00:00" },
  { path: "/padels/", lastModified: "2025-02-10T18:19:29+00:00" },
  { path: "/quinceanera/", lastModified: "2025-07-28T19:53:25+00:00" },
  { path: "/catalogo/corte/", lastModified: "2026-04-08T20:50:51+00:00" },
  { path: "/catalogo/maquillaje/", lastModified: "2026-04-08T21:40:31+00:00" },
  { path: "/catalogo/peinados/", lastModified: "2026-04-08T21:51:14+00:00" },
  { path: "/catalogo/color/", lastModified: "2026-04-08T22:07:17+00:00" },
  { path: "/catalogo/cejas/", lastModified: "2026-04-08T22:09:53+00:00" },
  { path: "/catalogo/tratamientos/", lastModified: "2026-04-09T21:13:41+00:00" },
  { path: "/catalogo/", lastModified: "2026-07-13T09:03:04+00:00" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((page) => ({ url: SITE + page.path, lastModified: page.lastModified })),
    ...PROMOS.map((promo) => ({ url: `${SITE}/promo/${promo.slug}/`, lastModified: promo.seo.modifiedTime })),
  ];
}
