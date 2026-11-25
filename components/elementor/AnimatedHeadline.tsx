"use client";

import { useEffect } from "react";

type Settings = {
  highlight_animation_duration?: number;
  highlight_iteration_delay?: number;
  loop?: string;
  [key: string]: unknown;
};

/**
 * Titular animado de Elementor (estilo "highlight"): dibuja el trazo SVG y, en bucle,
 * lo oculta y lo vuelve a dibujar. El SVG ya viene en el marcado; aquí sólo se alternan clases.
 */
export default function AnimatedHeadline({ elementId, settings }: { elementId: string; settings: Settings }) {
  useEffect(() => {
    const headline = document.querySelector<HTMLElement>(`.elementor-element-${elementId} .elementor-headline`);
    if (!headline) return;
    const duration = settings.highlight_animation_duration ?? 1200;
    const delay = settings.highlight_iteration_delay ?? 8000;
    const timers: number[] = [];

    headline.classList.add("e-animated", "e-hide-highlight");
    const show = () => {
      headline.classList.remove("e-hide-highlight");
      if (settings.loop === "yes") {
        timers.push(
          window.setTimeout(() => {
            headline.classList.add("e-hide-highlight");
            timers.push(window.setTimeout(show, 500));
          }, duration + delay),
        );
      }
    };
    timers.push(window.setTimeout(show, 100));
    return () => timers.forEach(clearTimeout);
  }, [elementId, settings]);

  return null;
}
