import PopupTrigger from "@/components/popups/PopupTrigger";
import type { PopupId } from "@/components/popups/PopupContext";

type Props = {
  id: string;
  text: string;
  className?: string;
  href?: string;
  target?: "_blank";
  popup?: PopupId;
};

const LINK_CLASS = "elementor-button elementor-button-link elementor-size-sm";

/** Widget "button" de Elementor. */
export default function ElementorButton({ id, text, className = "", href = "#", target, popup }: Props) {
  const content = (
    <>
      {" "}
      <span className="elementor-button-content-wrapper">
        {" "}
        <span className="elementor-button-text">{text}</span>{" "}
      </span>{" "}
    </>
  );

  return (
    <div
      className={`elementor-element elementor-element-${id} ${className} elementor-widget elementor-widget-button`.replace(/\s+/g, " ")}
      data-element_type="widget"
      data-widget_type="button.default"
    >
      {popup ? (
        <PopupTrigger popup={popup} className={LINK_CLASS}>
          {content}
        </PopupTrigger>
      ) : (
        <a className={LINK_CLASS} href={href} target={target}>
          {content}
        </a>
      )}
    </div>
  );
}
