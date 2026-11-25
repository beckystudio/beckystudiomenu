"use client";

import { useEffect } from "react";

type Settings = {
  background_motion_fx_translateY_effect?: string;
  background_motion_fx_translateY_speed?: { size?: number | string; [key: string]: unknown };
  background_motion_fx_translateY_direction?: string;
  [key: string]: unknown;
};

/**
 * Efecto de fondo "Motion Effects → Scrolling → Vertical scroll" de Elementor Pro.
 * Reproduce su algoritmo: la capa de fondo mide 100% + velocidad × 10, y se desplaza
 * -(alto de capa − alto del elemento) × % recorrido, donde el % es la posición del
 * elemento padre en el viewport (invertido si la dirección es "negative"). No renderiza nada.
 */
export default function MotionFxBackground({ elementId, settings }: { elementId: string; settings: Settings }) {
  useEffect(() => {
    const element = document.querySelector<HTMLElement>(`.elementor-element-${elementId}`);
    if (!element || settings.background_motion_fx_translateY_effect !== "yes") return;
    const speed = Number(settings.background_motion_fx_translateY_speed?.size ?? 4);
    const reverse = Boolean(settings.background_motion_fx_translateY_direction);
    const target = element.classList.contains("elementor-column")
      ? (element.querySelector<HTMLElement>(":scope > .elementor-widget-wrap") ?? element)
      : element;
    const parent = element.parentElement ?? element;

    const container = document.createElement("div");
    container.className = "elementor-motion-effects-container";
    const layer = document.createElement("div");
    layer.className = "elementor-motion-effects-layer";
    layer.style.width = "100%";
    layer.style.height = `${100 + speed * 10}%`;
    container.prepend(layer);
    target.prepend(container);
    element.classList.add("elementor-motion-effects-element-type-background");

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = parent.getBoundingClientRect();
      const start = window.innerHeight - rect.top;
      const range = window.innerHeight + parent.offsetHeight;
      let percent = Math.max(0, Math.min(start / range, 1)) * 100;
      if (reverse) percent = 100 - percent;
      const movable = layer.offsetHeight - element.offsetHeight;
      layer.style.setProperty("--translateY", `${-(movable * percent) / 100}px`);
      layer.style.transform = "translateY(var(--translateY))";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      container.remove();
      element.classList.remove("elementor-motion-effects-element-type-background");
    };
  }, [elementId, settings]);

  return null;
}
