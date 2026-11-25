import type { Promo } from "@/lib/promos";

/** Diapositiva del carrusel "Promos del mes" de /m/ (plantilla de loop 19586 de Elementor). */
export default function PromoLoopItem({ promo, index }: { promo: Promo; index: number }) {
  const { loopImage } = promo;
  return (
    <div
      data-elementor-type="loop-item"
      data-elementor-id="19586"
      className={`elementor elementor-19586 swiper-slide e-loop-item e-loop-item-${promo.postId} post-${promo.postId} promo type-promo status-publish has-post-thumbnail hentry`}
      role="group"
      aria-roledescription="slide"
    >
      <div className="elementor-element elementor-element-9901fc1 e-flex e-con-boxed e-con e-parent" data-element_type="container">
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-68ee0d9 elementor-widget elementor-widget-image"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <img
              loading={index > 0 ? "lazy" : undefined}
              decoding="async"
              src={loopImage.src}
              width={loopImage.width}
              height={loopImage.height}
              className={`attachment-large size-large wp-image-${loopImage.wpImageId} lazyloaded`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
