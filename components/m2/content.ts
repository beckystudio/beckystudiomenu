/**
 * Contenido de /m2/ (prueba basada en la estructura de axeldejose.com).
 * Todo sale del sitio actual de Becky Studio; lo que no tiene equivalente va marcado [PENDIENTE].
 */

export const BRAND = {
  name: "Becky Studio",
  /** Logo blanco del sitio (catálogo). */
  logo: { src: "/wp-content/uploads/2020/12/Logo_BeckyStudio_White-1-1024x128.png", width: 1024, height: 128 },
  /** Hero del home: "EXPERTAS EN BELLEZA, ARTISTAS POR NATURALEZA." */
  slogan: { lead: "Expertas en", leadEm: "belleza,", tail: "artistas por", tailEm: "naturaleza." },
  /** Título del sitio: "Becky Studio • Estudio de Belleza en Monterrey". */
  subtitle: "Estudio de Belleza en Monterrey",
  /** Dirección del footer ("Monterrey, N.L"). */
  location: "Monterrey, N.L.",
};

export const HERO_IMAGES = {
  /** Fachada del estudio (carrusel del home). */
  desktop: { src: "/img/envato-labs-image-edit-2025-10-26T204610.938.png", alt: "Fachada de Becky Studio" },
  /** Foto vertical de trabajo en el salón (carrusel del home). */
  mobile: { src: "/img/envato-labs-image-edit-100.png", alt: "Estilista de Becky Studio trabajando en el salón" },
};

export const EXPLORE = {
  title: "¿Qué te gustaría explorar?",
  items: [
    { label: "Menú de servicios", href: "/catalogo/", image: "/img/envato-labs-image-edit-94.png" },
    { label: "Tratamientos", href: "/catalogo/tratamientos/", image: "/img/envato-labs-image-edit-2025-10-26T210721.350.png" },
    { label: "Galería", href: "/galeria-2/", image: "/wp-content/uploads/2021/01/IMG_4261-1300x1300.jpg" },
  ],
};

/** Mismo enlace que el botón "Agendar cita" del header del home. */
export const WHATSAPP = { label: "Agendar cita", href: "https://wa.link/an9ep6" };

export const ABOUT = {
  trigger: "Conócenos más",
  /** Dos fotos de trabajo del salón (carrusel del home). */
  photos: [
    { src: "/img/envato-labs-image-edit-8-e1761365336386.png", alt: "Tratamiento capilar en Becky Studio" },
    { src: "/img/envato-labs-image-edit-89.png", alt: "Maquillaje en Becky Studio" },
  ],
  /** Encabezado del home: "¡BIENVENIDA!". */
  title: "¡Bienvenida!",
  /**
   * Bloques numerados: no hay equivalente en el sitio. Los títulos quedan [PENDIENTE];
   * 01 y 02 usan, mientras tanto, los textos existentes de bienvenida (home) y del equipo (footer).
   */
  blocks: [
    {
      title: "[PENDIENTE] Título 01",
      // Texto de bienvenida del home.
      body: [
        { text: "Nacidos en Monterrey, BECKYSTUDIO " },
        { text: "es el hogar de la creatividad", em: true },
        { text: ", guiada por una inmensa preocupación por la calidad en un ambiente contemporáneo inspirado en las nuevas tendencias y la naturaleza." },
      ],
    },
    {
      title: "[PENDIENTE] Título 02",
      // Texto del footer.
      body: [
        { text: "Somos profesionales de la belleza, nuestro equipo está en " },
        { text: "constante capacitación", em: true },
        { text: " para brindar el mejor servicio a nuestros clientes." },
      ],
    },
    { title: "[PENDIENTE] Título 03", body: [{ text: "[PENDIENTE] Texto del bloque 03." }] },
    { title: "[PENDIENTE] Título 04", body: [{ text: "[PENDIENTE] Texto del bloque 04." }] },
  ] as { title: string; body: { text: string; em?: boolean }[] }[],
  /** Pedido para esta prueba (en el sitio actual no aparece esta frase). */
  appointmentOnly: "Solo con cita previa.",
};

/** Sucursales tal como aparecen en el home (pestañas y popup "Visita tu sucursal favorita"). */
export const BRANCHES = [
  {
    name: "Monterrey",
    address: "Carr Nacional, Villas La Rioja, La Estanzuela, 64988 Monterrey, N.L.",
    whatsapp: "https://wa.link/r5lzzf",
    map: "https://g.co/kgs/nuZQiVt",
  },
  {
    name: "San Pedro",
    // Igual que en el home (dice "66220 Monterrey" aunque es la sucursal de San Pedro).
    address: "Río Manzanares 325 col. Del Valle, 66220 Monterrey, N.L.",
    whatsapp: "https://wa.link/bl8qpg",
    map: "https://g.co/kgs/VsZG9K3",
  },
];

export const SOCIAL = [
  { network: "facebook", label: "Facebook", href: "https://facebook.com/beckystudiomx" },
  { network: "instagram", label: "Instagram", href: "https://instagram.com/beckystudiomx" },
  { network: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@beckystudiomx" },
] as const;
