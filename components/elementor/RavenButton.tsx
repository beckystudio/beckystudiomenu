import PopupTrigger from "@/components/popups/PopupTrigger";
import type { PopupId } from "@/components/popups/PopupContext";

type Props = {
  id: string;
  text: string;
  /** Clases extra del contenedor (alineación, visibilidad responsive, etc.). */
  className?: string;
  href?: string;
  target?: "_blank";
  /** Si se indica, el botón abre ese popup en lugar de navegar. */
  popup?: PopupId;
};

const LINK_CLASS =
  "raven-button raven-button-widget-normal-effect-none  raven-button-text-align-right raven-button-link elementor-animation-none";

/** Widget "raven-button" (JupiterX). */
export default function RavenButton({ id, text, className = "", href = "#", target, popup }: Props) {
  const content = (
    <>
      <div className="raven-button-overlay" />
      <span className="raven-button-content">
        <div className="button-text-container">
          <div className="raven-button-texts-wrapper">
            <div className="button-text">
              <span className="raven-button-text"> {text} </span>
            </div>
          </div>
        </div>
      </span>
    </>
  );

  return (
    <div
      className={`elementor-element elementor-element-${id} ${className} elementor-widget elementor-widget-raven-button`.replace(/\s+/g, " ")}
      data-element_type="widget"
      data-widget_type="raven-button.default"
    >
      <div className="elementor-widget-container">
        <div className="raven-widget-wrapper">
          {popup ? (
            <PopupTrigger popup={popup} className={LINK_CLASS} target={target}>
              {content}
            </PopupTrigger>
          ) : (
            <a className={LINK_CLASS} href={href} target={target}>
              {content}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
