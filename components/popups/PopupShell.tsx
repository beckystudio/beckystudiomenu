"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CLOSE_PATH } from "@/components/elementor/paths";
import { usePopup, type PopupId } from "./PopupContext";

const MOBILE_MAX = 767;

type Props = {
  id: PopupId;
  /** Animación de entrada (desktop / móvil), como estaba configurada en Elementor. */
  entrance?: { desktop: string; mobile: string; duration: string };
  children: ReactNode;
};

/** Contenedor común de los popups de Elementor (lightbox). */
export default function PopupShell({ id, entrance, children }: Props) {
  const { current, close } = usePopup();
  const isOpen = current === id;
  const ref = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState("");
  // Como en WordPress, los popups viven al final del <body>: se montan con un portal tras hidratar.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const modal = ref.current;
    if (!modal) return;
    if (isOpen) {
      if (entrance) setAnimation(window.innerWidth <= MOBILE_MAX ? entrance.mobile : entrance.desktop);
      modal.focus();
    } else {
      modal.querySelectorAll("video").forEach((video) => video.pause());
    }
  }, [isOpen, entrance, mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={ref}
      className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
      id={`elementor-popup-modal-${id}`}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        className="dialog-widget-content dialog-lightbox-widget-content animated"
        style={animation && entrance ? { animationName: animation, animationDuration: entrance.duration } : undefined}
      >
        <a
          role="button"
          tabIndex={0}
          aria-label="Close"
          href="#"
          className="dialog-close-button dialog-lightbox-close-button"
          onClick={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <svg viewBox="0 0 1000 1000" aria-hidden="true">
            <path d={CLOSE_PATH} />
          </svg>
        </a>
        <div className="dialog-header dialog-lightbox-header" />
        <div className="dialog-message dialog-lightbox-message">
          <div
            style={{ display: "block" }}
            data-elementor-type="popup"
            data-elementor-id={id}
            className={`elementor elementor-${id} elementor-location-popup`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
