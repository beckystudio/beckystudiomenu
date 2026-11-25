import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PromoArticle from "@/components/promos/PromoArticle";
import { getPromo, PROMOS } from "@/lib/promos";
import "./page.css";

type Params = { params: Promise<{ slug: string }> };

/** Sólo existen las promos del archivo de datos; cualquier otro slug da 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PROMOS.map((promo) => ({ slug: promo.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const promo = getPromo((await params).slug);
  if (!promo) return {};
  const url = `/promo/${promo.slug}/`;
  return {
    title: { absolute: promo.seo.title },
    robots: promo.seo.robots,
    alternates: { canonical: url },
    openGraph: {
      locale: "es_ES",
      type: "article",
      title: promo.seo.title,
      url,
      siteName: "Becky Studio",
      images: [promo.seo.ogImage],
      modifiedTime: promo.seo.modifiedTime,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function PromoPage({ params }: Params) {
  const promo = getPromo((await params).slug);
  if (!promo) notFound();
  return <PromoArticle promo={promo} />;
}
