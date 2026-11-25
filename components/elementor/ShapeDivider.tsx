import { SPLIT_PATH, ZIGZAG_PATH } from "./paths";

type Props = {
  position: "top" | "bottom";
  shape?: "zigzag" | "split";
};

/** Divisor de forma de Elementor (zigzag / split) en la parte superior o inferior de una sección. */
export default function ShapeDivider({ position, shape = "zigzag" }: Props) {
  const isSplit = shape === "split";
  return (
    <div className={`elementor-shape elementor-shape-${position}`} aria-hidden="true" data-negative="false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={isSplit ? "0 0 1000 20" : "0 0 1800 5.8"}
        preserveAspectRatio="none"
      >
        <path className="elementor-shape-fill" d={isSplit ? SPLIT_PATH : ZIGZAG_PATH} />
      </svg>
    </div>
  );
}
