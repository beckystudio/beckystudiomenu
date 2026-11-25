"use client";

import { useEffect, useState } from "react";

const PHONE = "5218112147709";
const MESSAGE = "¡Hola! Necesito información sobre...";
const SHOW_DELAY_MS = 3000;

/** Botón flotante de WhatsApp (plugin Joinchat): aparece a los 3 s con su tooltip. */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const go = () => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <div
      className={`joinchat joinchat--right joinchat--dark joinchat--btn${visible ? " joinchat--show joinchat--tooltip" : ""}`}
      data-phone={PHONE}
      data-text={MESSAGE}
      hidden={!visible}
      aria-hidden="false"
    >
      <div
        className="joinchat__button"
        role="button"
        tabIndex={0}
        aria-label="¿Cómo te ayudo? Contacto de WhatsApp"
        onClick={go}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            go();
          }
        }}
      >
        <div className="joinchat__tooltip" aria-hidden="true">
          <div>¿Cómo te ayudo?</div>
        </div>
      </div>
    </div>
  );
}
