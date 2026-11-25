import ElementorGallery from "@/components/elementor/ElementorGallery";

import type { GalleryItem } from "@/components/elementor/ElementorGallery";

/** Fotos de la galería (56), con sus categorías: 0 = Cabello, 1 = Maquillaje, 2 = Peinados. */
const GALLERY_ITEMS: GalleryItem[] = [
  {
    href: "/wp-content/uploads/2020/12/IMG_2835.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_2835.jpg",
    width: 848,
    height: 1131,
    tags: ["1"],
    title: "IMG_2835",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4261-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4261-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4261",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1691-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1691-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "IMG_1691",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_3230-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_3230-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_3230",
  },
  {
    href: "/wp-content/uploads/2021/01/b6da4e11-f1e2-4964-9e85-a2575f37d0e2.jpg",
    thumbnail: "/wp-content/uploads/2021/01/b6da4e11-f1e2-4964-9e85-a2575f37d0e2.jpg",
    width: 960,
    height: 1280,
    tags: ["2"],
    title: "b6da4e11-f1e2-4964-9e85-a2575f37d0e2",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2954-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2954-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2954",
  },
  {
    href: "/wp-content/uploads/2021/01/A7B6A7A3-31AC-4016-99FB-28E8866A7F25.jpg",
    thumbnail: "/wp-content/uploads/2021/01/A7B6A7A3-31AC-4016-99FB-28E8866A7F25.jpg",
    width: 960,
    height: 1038,
    tags: ["2"],
    title: "A7B6A7A3-31AC-4016-99FB-28E8866A7F25",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1280-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1280-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_1280",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_3739-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_3739-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_3739",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4567.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4567.jpg",
    width: 1242,
    height: 1244,
    tags: ["0"],
    title: "IMG_4567",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4190-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4190-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4190",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_45661.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_45661-1242x1300.jpg",
    width: 1242,
    height: 1300,
    tags: ["1"],
    title: "IMG_4566(1)",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_3689-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_3689-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_3689",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4570.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4570-1241x1300.jpg",
    width: 1241,
    height: 1300,
    tags: ["0"],
    title: "IMG_4570",
  },
  {
    href: "/wp-content/uploads/2021/01/D454A597-A55A-4D7A-AA26-B26E5A881355-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/D454A597-A55A-4D7A-AA26-B26E5A881355-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "D454A597-A55A-4D7A-AA26-B26E5A881355",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4662-1-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4662-1-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4662 (1)",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2524-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2524-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2524",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4471-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4471-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4471",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_5405-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_5405-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_5405",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2519-1-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2519-1-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2519 (1)",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_7608-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_7608-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "IMG_7608",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2988-1-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2988-1-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2988 (1)",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4873-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4873-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4873",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2887-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2887-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2887",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1493-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1493-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_1493",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1532.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1532.jpg",
    width: 1000,
    height: 668,
    tags: ["2"],
    title: "IMG_1532",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4391-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4391-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4391",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_3316-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_3316-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_3316",
  },
  {
    href: "/wp-content/uploads/2021/01/2F1AEFE7-A760-4692-923D-5F45C1289F9E-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/2F1AEFE7-A760-4692-923D-5F45C1289F9E-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "2F1AEFE7-A760-4692-923D-5F45C1289F9E",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_6873-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_6873-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_6873",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_3466-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_3466-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "TRABAJO",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_3318-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_3318-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "TRABAJO",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_7682-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_7682-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_7682",
  },
  {
    href: "/wp-content/uploads/2021/01/747FA9B9-7AC1-409A-959A-BCEA2C6FC29D.jpg",
    thumbnail: "/wp-content/uploads/2021/01/747FA9B9-7AC1-409A-959A-BCEA2C6FC29D-1125x1300.jpg",
    width: 1125,
    height: 1300,
    tags: ["2"],
    title: "747FA9B9-7AC1-409A-959A-BCEA2C6FC29D",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_9856-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_9856-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "TRABAJO",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_3323-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_3323-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_3323",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4911-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4911-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4911",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_7206-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_7206-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "TRABAJO",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1921.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1921.jpg",
    width: 848,
    height: 1131,
    tags: ["1"],
    title: "IMG_1921",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2141-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2141-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_2141",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_5081-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_5081-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_5081",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_5572.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_5572-1242x1300.jpg",
    width: 1242,
    height: 1300,
    tags: ["0"],
    title: "IMG_5572",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_4564.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_4564-1242x1300.jpg",
    width: 1242,
    height: 1300,
    tags: ["1"],
    title: "IMG_4564",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4656-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4656-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4656",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1202-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1202-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "IMG_1202",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_4200-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_4200-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_4200",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_9441-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_9441-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "TRABAJO",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2924-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2924-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2924",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_3546-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_3546-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_3546",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_1979-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_1979-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_1979",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_7386-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_7386-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["2"],
    title: "IMG_7386",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2890-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2890-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2890",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_5573.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_5573-1241x1300.jpg",
    width: 1241,
    height: 1300,
    tags: ["1"],
    title: "IMG_5573",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2194-scaled.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2194-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["0"],
    title: "IMG_2194",
  },
  {
    href: "/wp-content/uploads/2021/01/IMG_2213.jpg",
    thumbnail: "/wp-content/uploads/2021/01/IMG_2213.jpg",
    width: 853,
    height: 1280,
    tags: ["2"],
    title: "IMG_2213",
  },
  {
    href: "/wp-content/uploads/2020/12/IMG_2667-scaled.jpg",
    thumbnail: "/wp-content/uploads/2020/12/IMG_2667-1300x1300.jpg",
    width: 1300,
    height: 1300,
    tags: ["1"],
    title: "IMG_2667",
  },
];
/**
 * Contenido de /galeria-2/ copiado tal cual de beckystudio.mx (Elementor), generado a partir de su HTML.
 * Los estilos están en app/(site)/galeria-2/page.css.
 */
export default function Galeria() {
  return (
    <>
      <main id="jupiterx-main" className="jupiterx-main">
        <div data-elementor-type="wp-page" data-elementor-id="11177" className="elementor elementor-11177">
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-9056153 elementor-section-full_width elementor-section-content-middle elementor-section-height-min-height elementor-section-items-bottom elementor-section-height-default"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a719838"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-1ba28ee elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <h2 className="elementor-heading-title elementor-size-default">{"Galería"}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="elementor-element elementor-element-1e01294 e-con-full e-flex e-con e-parent"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-f318273 elementor-gallery--filter-align-center elementor-widget elementor-widget-gallery"
              data-element_type="widget"
              data-widget_type="gallery.default"
            >
              <ElementorGallery
                filters={[
                  { index: "all", label: "Todos" },
                  { index: "0", label: "Cabello" },
                  { index: "1", label: "Maquillaje" },
                  { index: "2", label: "Peinados" },
                ]}
                items={GALLERY_ITEMS}
                random
                desktop={{ columns: 4, gap: 30 }}
                tablet={{ columns: 2, gap: 10 }}
                mobile={{ columns: 1, gap: 12 }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
