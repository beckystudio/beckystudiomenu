"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

type Size = { size?: number | string; [key: string]: unknown };
type Settings = Record<string, unknown> & {
  slides_to_show?: string;
  slides_to_show_tablet?: string;
  slides_to_show_mobile?: string;
  slides_per_view?: string;
  slides_per_view_tablet?: string;
  slides_per_view_mobile?: string;
  slides_to_scroll?: string;
  image_spacing_custom?: Size;
  image_spacing_custom_tablet?: Size;
  image_spacing_custom_mobile?: Size;
  space_between?: Size;
  space_between_tablet?: Size;
  space_between_mobile?: Size;
  autoplay?: string;
  autoplay_speed?: number;
  pause_on_hover?: string;
  pause_on_interaction?: string;
  infinite?: string;
  loop?: string;
  speed?: number;
};

const num = (v: unknown, fallback: number) => {
  const n = typeof v === "object" && v ? Number((v as Size).size) : Number(v);
  return Number.isFinite(n) && String((v as Size)?.size ?? v) !== "" ? n : fallback;
};

/**
 * Inicializa con Swiper un carrusel de Elementor (loop-carousel, reviews…) sobre el marcado
 * ya renderizado, con las mismas opciones que tenía configuradas. No renderiza nada.
 * Con `forceMobile` usa siempre la configuración de celular (páginas que se ven como en celular
 * en cualquier pantalla, como /m/).
 */
export default function ElementorCarousel({
  elementId,
  settings,
  forceMobile = false,
}: {
  elementId: string;
  kind: string;
  settings: Settings;
  forceMobile?: boolean;
}) {
  useEffect(() => {
    const widget = document.querySelector<HTMLElement>(`.elementor-element-${elementId}`);
    const container = widget?.querySelector<HTMLElement>(".swiper");
    if (!widget || !container) return;

    const desktopView = num(settings.slides_to_show ?? settings.slides_per_view, 1);
    const tabletView = num(settings.slides_to_show_tablet ?? settings.slides_per_view_tablet, desktopView);
    const mobileView = num(settings.slides_to_show_mobile ?? settings.slides_per_view_mobile, tabletView);
    const desktopGap = num(settings.image_spacing_custom ?? settings.space_between, 10);
    const tabletGap = num(settings.image_spacing_custom_tablet ?? settings.space_between_tablet, desktopGap);
    const mobileGap = num(settings.image_spacing_custom_mobile ?? settings.space_between_mobile, tabletGap);
    const scroll = num(settings.slides_to_scroll, 1);

    const options: SwiperOptions = {
      modules: [Autoplay, Navigation, Pagination],
      speed: num(settings.speed, 500),
      loop: (settings.infinite ?? settings.loop) === "yes",
      slidesPerView: mobileView,
      slidesPerGroup: Math.min(scroll, mobileView),
      spaceBetween: mobileGap,
      // Mismos cortes que Elementor: móvil ≤ 767 px, tablet ≤ 1024 px.
      breakpoints: forceMobile
        ? undefined
        : {
            768: { slidesPerView: tabletView, slidesPerGroup: Math.min(scroll, tabletView), spaceBetween: tabletGap },
            1025: { slidesPerView: desktopView, slidesPerGroup: Math.min(scroll, desktopView), spaceBetween: desktopGap },
          },
    };

    if (settings.autoplay === "yes") {
      options.autoplay = {
        delay: num(settings.autoplay_speed, 5000),
        disableOnInteraction: settings.pause_on_interaction === "yes",
        pauseOnMouseEnter: settings.pause_on_hover === "yes",
      };
    }
    const pagination = widget.querySelector<HTMLElement>(".swiper-pagination");
    if (pagination) options.pagination = { el: pagination, type: "bullets", clickable: true };
    const next = widget.querySelector<HTMLElement>(".elementor-swiper-button-next");
    const prev = widget.querySelector<HTMLElement>(".elementor-swiper-button-prev");
    if (next && prev) options.navigation = { nextEl: next, prevEl: prev };

    const swiper = new Swiper(container, options);
    return () => {
      swiper.destroy(true, true);
    };
  }, [elementId, settings, forceMobile]);

  return null;
}
