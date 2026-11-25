"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/**
 * id del popup de Elementor (se conserva porque el CSS original depende de él).
 * Home: 19750, 19739, 16044 · Social: 18937, 18940, 18943 · Tratamientos: 20017.
 */
export type PopupId = string;

type PopupContextValue = {
  current: PopupId | null;
  open: (id: PopupId, trigger?: HTMLElement | null) => void;
  close: () => void;
};

const PopupContext = createContext<PopupContextValue | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<PopupId | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const open = useCallback((id: PopupId, trigger?: HTMLElement | null) => {
    lastTrigger.current = trigger ?? null;
    setCurrent(id);
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
    lastTrigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current, close]);

  const value = useMemo(() => ({ current, open, close }), [current, open, close]);
  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopup debe usarse dentro de <PopupProvider>");
  return ctx;
}
