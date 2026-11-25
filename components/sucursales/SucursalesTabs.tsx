"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

export type Tab = {
  /** Número de pestaña de Raven Tabs (1, 2…); el id de título/contenido es 1210 + n, como en el original. */
  n: number;
  title: string;
  content: ReactNode;
};

/** Widget "raven-tabs" (JupiterX) para las sucursales. */
export default function SucursalesTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.n);

  const onKeyDown = (n: number) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActive(n);
    }
  };

  return (
    <div className="raven-tabs raven-tabs-horizontal raven-tabs-line">
      <div className="raven-tabs-list" role="tablist">
        {tabs.map((tab) => (
          <div
            key={tab.n}
            id={`raven-tabs-title-${1210 + tab.n}`}
            className={`raven-tabs-title raven-tabs-desktop-title raven-tabs-has-icon${active === tab.n ? " raven-tabs-active" : ""}`}
            role="tab"
            aria-controls={`raven-tabs-content-${1210 + tab.n}`}
            aria-selected={active === tab.n}
            tabIndex={0}
            data-tab={tab.n}
            onClick={() => setActive(tab.n)}
            onKeyDown={onKeyDown(tab.n)}
          >
            <span className="raven-tabs-title-icon"> </span> <span className="raven-tabs-title-text">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="raven-tabs-content-wrapper">
        {tabs.map((tab) => (
          <div
            key={tab.n}
            id={`raven-tabs-content-${1210 + tab.n}`}
            className={`raven-tabs-content elementor-clearfix${active === tab.n ? " raven-tabs-active" : ""}`}
            role="tabpanel"
            aria-labelledby={`raven-tabs-title-${1210 + tab.n}`}
            data-tab={tab.n}
          >
            <div className="raven-animations-none is-template-content">{tab.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
