/**
 * Promos del mes (antes: tipo de contenido "promo" en WordPress).
 * Para cambiar las promos se edita este archivo: alimenta /promo/[slug] y el carrusel "Promos del mes" de /m/.
 * El orden es el del carrusel en el sitio original. Los slugs no coinciden con los títulos: así estaban en WordPress.
 */
export type Promo = {
  slug: string;
  /** id del post en WordPress (el CSS y las clases del body dependen de él). */
  postId: string;
  title: string;
  /** Imagen destacada a tamaño completo, con las versiones recortadas que usa JupiterX en pantallas chicas. */
  image: { src: string; width: number; height: number; alt: string; sources: { media: string; srcSet: string }[] };
  /** Versión "large" (1024×576) que se muestra en el carrusel de /m/. */
  loopImage: { src: string; width: number; height: number; wpImageId: number };
  seo: { title: string; robots: string; ogImage: { url: string; width: number; height: number }; modifiedTime: string };
};

export const PROMOS: Promo[] = [
  {
    "slug": "mixologia-capilar",
    "postId": "20383",
    "title": "Control Frizz - Cirugía Capilar",
    "image": {
      "src": "/wp-content/uploads/2026/08/Control-frizz-con-lujo-y-movimiento.png",
      "width": 1672,
      "height": 941,
      "alt": "",
      "sources": [
        {
          "media": "(max-width: 480px)",
          "srcSet": "/wp-content/uploads/jupiterx/images/Control-frizz-con-lujo-y-movimiento-edc11f1.png"
        },
        {
          "media": "(max-width: 800px)",
          "srcSet": "/wp-content/uploads/jupiterx/images/Control-frizz-con-lujo-y-movimiento-04667c2.png"
        }
      ]
    },
    "loopImage": {
      "src": "/wp-content/uploads/2026/08/Control-frizz-con-lujo-y-movimiento-1024x576.png",
      "width": 1024,
      "height": 576,
      "wpImageId": 20408
    },
    "seo": {
      "title": "Control Frizz - Cirugía Capilar • Becky Studio",
      "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      "ogImage": {
        "url": "/wp-content/uploads/2026/08/Control-frizz-con-lujo-y-movimiento.png",
        "width": 1672,
        "height": 941
      },
      "modifiedTime": "2026-11-05T08:07:10+00:00"
    }
  },
  {
    "slug": "hair-wellness",
    "postId": "20379",
    "title": "MIXOLOGÍA CAPILAR",
    "image": {
      "src": "/wp-content/uploads/2026/08/Promocion-Hair-Reset-de-lujo.png",
      "width": 1672,
      "height": 941,
      "alt": "",
      "sources": [
        {
          "media": "(max-width: 480px)",
          "srcSet": "/wp-content/uploads/jupiterx/images/Promocion-Hair-Reset-de-lujo-863d8a2.png"
        },
        {
          "media": "(max-width: 800px)",
          "srcSet": "/wp-content/uploads/jupiterx/images/Promocion-Hair-Reset-de-lujo-b817456.png"
        }
      ]
    },
    "loopImage": {
      "src": "/wp-content/uploads/2026/08/Promocion-Hair-Reset-de-lujo-1024x576.png",
      "width": 1024,
      "height": 576,
      "wpImageId": 20410
    },
    "seo": {
      "title": "MIXOLOGÍA CAPILAR • Becky Studio",
      "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      "ogImage": {
        "url": "/wp-content/uploads/2026/08/Promocion-Hair-Reset-de-lujo-1024x576.png",
        "width": 1024,
        "height": 576
      },
      "modifiedTime": "2026-11-05T08:09:35+00:00"
    }
  },
  {
    "slug": "recovery-color-experience",
    "postId": "20377",
    "title": "DISEÑO DE COLOR",
    "image": {
      "src": "/wp-content/uploads/2026/08/Promocion-Rubia-de-Lujo.png",
      "width": 1672,
      "height": 941,
      "alt": "",
      "sources": [
        {
          "media": "(max-width: 480px)",
          "srcSet": "/wp-content/uploads/jupiterx/images/Promocion-Rubia-de-Lujo-823252d.png"
        },
        {
          "media": "(max-width: 800px)",
          "srcSet": "/wp-content/uploads/jupiterx/images/Promocion-Rubia-de-Lujo-1f8b093.png"
        }
      ]
    },
    "loopImage": {
      "src": "/wp-content/uploads/2026/08/Promocion-Rubia-de-Lujo-1024x576.png",
      "width": 1024,
      "height": 576,
      "wpImageId": 20411
    },
    "seo": {
      "title": "DISEÑO DE COLOR • Becky Studio",
      "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      "ogImage": {
        "url": "/wp-content/uploads/2026/08/Promocion-Rubia-de-Lujo.png",
        "width": 1672,
        "height": 941
      },
      "modifiedTime": "2026-11-05T08:10:52+00:00"
    }
  }
];

export const getPromo = (slug: string) => PROMOS.find((promo) => promo.slug === slug);
