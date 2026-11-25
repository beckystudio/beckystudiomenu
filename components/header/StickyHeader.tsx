"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Reproduce el comportamiento "sticky" de JupiterX: al bajar más que la altura del header
 * se añade `jupiterx-header-stick` al body (el CSS original muestra la plantilla sticky)
 * y, pasado `offset`, `jupiterx-header-sticked`.
 */
export default function StickyHeader({
  offset,
  overlap = false,
  children,
}: {
  offset: number;
  /** Con "overlap" el header se superpone al contenido y no se compensa su altura. */
  overlap?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = ref.current;
    if (!header) return;
    const body = document.body;
    const site = (header.closest(".jupiterx-site") as HTMLElement | null) ?? body;
    let headerHeight = header.offsetHeight;

    const update = () => {
      const y = window.scrollY;
      if (y > headerHeight) {
        if (!body.classList.contains("jupiterx-header-stick")) {
          if (!overlap) site.style.paddingTop = `${headerHeight}px`;
          body.classList.add("jupiterx-header-stick");
        }
        const sticky = header.querySelector<HTMLElement>(":scope > .elementor:last-of-type:not(:first-of-type)");
        if (sticky && sticky.offsetHeight > 0) header.style.height = `${sticky.offsetHeight}px`;
      } else if (body.classList.contains("jupiterx-header-stick")) {
        body.classList.remove("jupiterx-header-stick");
        site.style.paddingTop = "";
        header.style.height = "";
      }
      body.classList.toggle("jupiterx-header-sticked", y > offset);
    };

    const onResize = () => {
      if (!body.classList.contains("jupiterx-header-stick")) headerHeight = header.offsetHeight;
      update();
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, [offset, overlap]);

  return (
    <header
      ref={ref}
      className="jupiterx-header jupiterx-header-custom jupiterx-header-sticky-custom"
      role="banner"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      {children}
    </header>
  );
}
