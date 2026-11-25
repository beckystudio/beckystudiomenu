import type { ReactNode } from "react";

type Props = {
  /** id de elemento de Elementor (p. ej. "cd971e6"); el CSS original depende de él. */
  id: string;
  tag?: "h2" | "h4";
  className?: string;
  children: ReactNode;
};

/** Widget "heading" de Elementor. */
export default function Heading({ id, tag: Tag = "h2", className = "", children }: Props) {
  return (
    <div
      className={`elementor-element elementor-element-${id} ${className} elementor-widget elementor-widget-heading`.replace(/\s+/g, " ")}
      data-element_type="widget"
      data-widget_type="heading.default"
    >
      <Tag className="elementor-heading-title elementor-size-default">{children}</Tag>
    </div>
  );
}
