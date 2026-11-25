/**
 * Contenido de /catalogo2/: el mismo de /catalogo/ (sin agregar nada), con el diseño de /m2/.
 */

/** Fondo de /catalogo/ (sombras de hojas). */
export const BACKGROUND = { src: "/img/augustine-wong-T0BYurbDK_M-unsplash-1-scaled.jpg" };

export const TITLE = "Catálogo de servicios";

/** Las 6 categorías, en el mismo orden y con los mismos enlaces que /catalogo/. */
export const CATEGORIES = [
  { label: "Diseño de color", href: "/catalogo/color/" },
  { label: "Corte", href: "/catalogo/corte/" },
  { label: "Tratamientos", href: "/catalogo/tratamientos/" },
  { label: "Maquillaje", href: "/catalogo/maquillaje/" },
  { label: "Peinado", href: "/catalogo/peinados/" },
  { label: "Depilación", href: "/catalogo/cejas/" },
];

/** Sección de abajo: abren los PDF de paquetes, con las mismas imágenes de fondo que en /catalogo/. */
export const PACKAGES = [
  { label: "Novias", href: "/pdf/NOVIAS_2026.pdf", image: "/img/envato-labs-image-edit-89.png", position: "center center" },
  { label: "XV Años", href: "/pdf/xvanera_2026.pdf", image: "/wp-content/uploads/2025/07/xv.png", position: "center top" },
];

/**
 * Botón "REGRESAR A SOCIAL" de /catalogo/. En el original el enlace llevaba un parámetro de
 * seguimiento de Facebook (?fbclid=…); aquí apunta a /m/ sin él.
 */
export const BACK = { label: "Regresar a social", href: "/m/" };
