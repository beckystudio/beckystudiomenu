"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { usePopup, type PopupId } from "./PopupContext";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  popup: PopupId;
  children?: ReactNode;
};

/** Enlace que abre un popup (en el original: href="#elementor-action…" interceptado por JS). */
export default function PopupTrigger({ popup, children, ...rest }: Props) {
  const { open } = usePopup();
  return (
    <a
      {...rest}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        open(popup, event.currentTarget);
      }}
    >
      {children}
    </a>
  );
}
