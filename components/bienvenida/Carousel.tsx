"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { CHEVRON_LEFT_PATH, CHEVRON_RIGHT_PATH } from "@/components/elementor/paths";

/** Cada slide usa su clase `elementor-repeater-item-*`; la imagen de fondo viene del CSS original. */
const SLIDES = [
  { item: "e40a89f", label: "envato-labs-image-edit (89)" },
  { item: "e7a858c", label: "envato-labs-image-edit (94)" },
  { item: "61ac05a", label: "envato-labs-image-edit - 2025-10-26T204610.938" },
  { item: "482a24c", label: "envato-labs-image-edit (8)", kenBurns: true },
  { item: "7f3aaee", label: "envato-labs-image-edit - 2025-10-26T210721.350" },
  { item: "10caa63", label: "envato-labs-image-edit (100)" },
];

/** Carrusel de la sección de bienvenida (widget "slides" de Elementor) con Swiper. */
export default function Carousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    // Mismas opciones que estaban configuradas en Elementor.
    const swiper = new Swiper(wrapperRef.current, {
      modules: [Autoplay, EffectFade, Navigation, Pagination],
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 540,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true },
      pagination: { el: paginationRef.current, clickable: true },
      navigation: { nextEl: nextRef.current, prevEl: prevRef.current },
    });
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div
      className="elementor-element elementor-element-6b975df elementor--h-position-center elementor--v-position-middle elementor-arrows-position-inside elementor-pagination-position-inside elementor-widget elementor-widget-slides"
      data-element_type="widget"
      data-widget_type="slides.default"
    >
      <div
        ref={wrapperRef}
        className="elementor-slides-wrapper elementor-main-swiper swiper"
        role="region"
        aria-roledescription="carousel"
        aria-label="Slides"
        dir="ltr"
        data-animation="zoomIn"
      >
        <div className="swiper-wrapper elementor-slides">
          {SLIDES.map((slide) => (
            <div key={slide.item} className={`elementor-repeater-item-${slide.item} swiper-slide`} role="group" aria-roledescription="slide">
              <div
                className={slide.kenBurns ? "swiper-slide-bg elementor-ken-burns elementor-ken-burns--out" : "swiper-slide-bg"}
                role="img"
                aria-label={slide.label}
              />
              <div className="elementor-background-overlay" />
              <div className="swiper-slide-inner">
                <div className="swiper-slide-contents" />
              </div>
            </div>
          ))}
        </div>
        <div ref={prevRef} className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide">
          <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d={CHEVRON_LEFT_PATH} />
          </svg>
        </div>
        <div ref={nextRef} className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide">
          <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d={CHEVRON_RIGHT_PATH} />
          </svg>
        </div>
        <div ref={paginationRef} className="swiper-pagination" />
      </div>
    </div>
  );
}
