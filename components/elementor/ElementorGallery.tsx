"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

export type GalleryItem = {
  /** Imagen a tamaño completo (se abre en el visor). */
  href: string;
  /** Miniatura que se muestra en el mosaico. */
  thumbnail: string;
  width: number;
  height: number;
  /** Índices de las categorías a las que pertenece (data-e-gallery-tags). */
  tags: string[];
  title: string;
};

type Device = { columns: number; gap: number };
type Props = {
  filters: { index: string; label: string }[];
  items: GalleryItem[];
  /** Columnas y separación por dispositivo, como en Elementor (móvil ≤ 767 px, tablet ≤ 1024 px). */
  desktop: Device;
  tablet: Device;
  mobile: Device;
  /**
   * En WordPress la galería tenía orden aleatorio (cambiaba cada vez que se regeneraba la caché).
   * Aquí se baraja al cargar la página, en el navegador.
   */
  random?: boolean;
};

type Layout = {
  container: CSSProperties;
  items: Record<number, CSSProperties>;
};

const device = (width: number, p: Props) => (width <= 767 ? p.mobile : width <= 1024 ? p.tablet : p.desktop);

/**
 * Galería de Elementor Pro (librería e-gallery) en modo "masonry", con filtros por categoría,
 * carga diferida de miniaturas y visor. Reproduce el cálculo de e-gallery: cada imagen va a la
 * columna más baja y las posiciones se expresan en variables CSS que usa el CSS original.
 */
export default function ElementorGallery(props: Props) {
  const { filters, random = false } = props;
  const [items, setItems] = useState(props.items);
  useEffect(() => {
    if (!random) return;
    const shuffled = [...props.items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
  }, [random, props.items]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("all");
  const [layout, setLayout] = useState<Layout | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = items.map((item, i) => (active === "all" || item.tags.includes(active) ? i : -1)).filter((i) => i >= 0);

  const computeLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.offsetWidth;
    const { columns, gap } = device(window.innerWidth, props);
    const columnWidth = (width - gap * (columns - 1)) / columns;
    const heights = new Array(columns).fill(0);
    const counts = new Array(columns).fill(0);
    const placed: { index: number; column: number; inColumn: number; top: number; ratio: number }[] = [];
    for (const index of visible) {
      const ratio = items[index].height / items[index].width;
      const column = heights.indexOf(Math.min(...heights));
      placed.push({ index, column, inColumn: counts[column], top: heights[column], ratio });
      heights[column] += columnWidth * ratio;
      counts[column] += 1;
    }
    const highest = Math.max(...heights);
    const highestColumn = heights.indexOf(highest);
    setLayout((previous) => {
      const next: Layout = {
        container: {
          ["--hgap" as string]: `${gap}px`,
          ["--vgap" as string]: `${gap}px`,
          ["--animation-duration" as string]: "350ms",
          ["--columns" as string]: columns,
          ["--highest-column-gap-count" as string]: Math.max(counts[highestColumn] - 1, 0),
          paddingBottom: `${highest ? (highest / width) * 100 : 0}%`,
        },
        // Las ocultas conservan su última posición (como en e-gallery) y se animan a escala 0.
        items: { ...(previous?.items ?? {}) },
      };
      for (const p of placed) {
        next.items[p.index] = {
          ["--item-height" as string]: `${p.ratio * 100}%`,
          ["--column" as string]: p.column,
          ["--items-in-column" as string]: p.inColumn,
          ["--percent-height" as string]: `${highest ? (p.top / highest) * 100 : 0}%`,
        };
      }
      return next;
    });
  }, [active, items]);

  useEffect(() => {
    computeLayout();
    window.addEventListener("resize", computeLayout);
    return () => window.removeEventListener("resize", computeLayout);
  }, [computeLayout]);

  // Carga diferida de miniaturas (e-gallery--lazyload).
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("IntersectionObserver" in window)) {
      setLoaded(new Set(items.map((_, i) => i)));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const newly = entries.filter((e) => e.isIntersecting).map((e) => Number((e.target as HTMLElement).dataset.index));
        if (newly.length) {
          setLoaded((prev) => new Set([...prev, ...newly]));
          entries.forEach((e) => e.isIntersecting && observer.unobserve(e.target));
        }
      },
      { rootMargin: "200px 0px" },
    );
    container.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items, layout === null]);

  // Visor: teclado (Esc, flechas).
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((i) => (i === null ? i : visible[(visible.indexOf(i) + 1) % visible.length]));
      if (event.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : visible[(visible.indexOf(i) - 1 + visible.length) % visible.length]));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, visible]);

  const step = (delta: number) =>
    setLightbox((i) => (i === null ? i : visible[(visible.indexOf(i) + delta + visible.length) % visible.length]));

  return (
    <>
      <div className="elementor-gallery__titles-container e--pointer-underline e--animation-fade" aria-label="Gallery filter">
        {filters.map((f) => (
          <a
            key={f.index}
            className={`elementor-item elementor-gallery-title${active === f.index ? " elementor-item-active" : ""}`}
            role="button"
            tabIndex={0}
            data-gallery-index={f.index}
            onClick={() => setActive(f.index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActive(f.index);
              }
            }}
          >
            {" "}
            {f.label}{" "}
          </a>
        ))}
      </div>
      <div
        ref={containerRef}
        className="elementor-gallery__container e-gallery-container e-gallery-masonry e-gallery--ltr e-gallery--lazyload"
        style={layout?.container}
      >
        {items.map((item, index) => {
          const hidden = !visible.includes(index);
          const isLoaded = loaded.has(index);
          return (
            <a
              key={item.href + index}
              className={`e-gallery-item elementor-gallery-item elementor-animated-content${hidden ? " e-gallery-item--hidden" : ""}`}
              data-e-gallery-tags={item.tags.join(",")}
              href={item.href}
              data-index={index}
              style={layout?.items[index]}
              onClick={(event) => {
                event.preventDefault();
                setLightbox(index);
              }}
            >
              <div
                className={`e-gallery-image elementor-gallery-item__image${isLoaded ? " e-gallery-image-loaded" : ""}`}
                data-thumbnail={item.thumbnail}
                data-width={item.width}
                data-height={item.height}
                aria-label=""
                role="img"
                style={isLoaded ? { backgroundImage: `url("${item.thumbnail}")` } : undefined}
              />
              <div className="elementor-gallery-item__overlay" />
              <div className="elementor-gallery-item__content" />{" "}
            </a>
          );
        })}
      </div>
      {lightbox !== null && (
        // Visor simplificado (el de Elementor es un carrusel Swiper a pantalla completa).
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].title}
          onClick={(event) => event.target === event.currentTarget && setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.87)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={items[lightbox].href}
            alt={items[lightbox].title}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
          />
          {[
            { label: "Anterior", onClick: () => step(-1), style: { left: 16 }, text: "‹" },
            { label: "Siguiente", onClick: () => step(1), style: { right: 16 }, text: "›" },
            { label: "Cerrar", onClick: () => setLightbox(null), style: { top: 16, right: 16, transform: "none" }, text: "×" },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              aria-label={b.label}
              onClick={b.onClick}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: 0,
                color: "#fff",
                fontSize: 44,
                lineHeight: 1,
                cursor: "pointer",
                padding: 12,
                ...b.style,
              }}
            >
              {b.text}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
