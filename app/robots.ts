import type { MetadataRoute } from "next";

/** Igual que el robots.txt de Yoast en WordPress: no bloquea nada y apunta al sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "" },
    sitemap: "https://beckystudio.mx/sitemap.xml",
  };
}
