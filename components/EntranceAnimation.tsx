"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

const MOBILE_MAX = 767;

type Props = HTMLAttributes<HTMLElement> & {
  /** Etiqueta a renderizar (Elementor anima widgets, contenedores y secciones). */
  as?: "div" | "section";
  className: string;
  /** Animación en desktop (o "" si no hay). */
  animation?: string;
  /** Animación en móvil (≤ 767 px); si falta se usa la de desktop. */
  animationMobile?: string;
  children?: ReactNode;
  [attr: `data-${string}`]: string | undefined;
};

/** Animación de entrada al hacer scroll (equivalente a las "Motion Effects" de Elementor). */
export default function EntranceAnimation({
  as: Tag = "div",
  className,
  animation = "",
  animationMobile,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<{ hidden: boolean; name: string }>({ hidden: true, name: "" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const name = window.innerWidth <= MOBILE_MAX ? animationMobile || animation : animation;
    if (!name || name === "none" || !("IntersectionObserver" in window)) {
      setState({ hidden: false, name: "" });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setState({ hidden: false, name });
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, animationMobile]);

  const classes = [className, state.hidden && "elementor-invisible", state.name && `animated ${state.name}`]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref as never} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
