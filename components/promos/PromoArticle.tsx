import type { Promo } from "@/lib/promos";

/** Página individual de una promo (plantilla "single" de JupiterX): sólo la imagen destacada. */
export default function PromoArticle({ promo }: { promo: Promo }) {
  const { image } = promo;
  return (
    <main id="jupiterx-main" className="jupiterx-main">
      <div className="jupiterx-main-content">
        <div className="container">
          <div className="row">
            <div id="jupiterx-primary" className="jupiterx-primary col-lg-12">
              <div className="jupiterx-content" role="main" itemProp="mainEntityOfPage">
                <article
                  id={promo.postId}
                  className={`jupiterx-post post-${promo.postId} promo type-promo status-publish has-post-thumbnail hentry`}
                  itemScope
                  itemType="http://schema.org/CreativeWork"
                >
                  <header className="jupiterx-post-header" />
                  <div className="jupiterx-post-body" itemProp="articleBody">
                    <div className="jupiterx-post-image">
                      <picture>
                        {image.sources.map((source) => (
                          <source key={source.media} media={source.media} srcSet={source.srcSet} />
                        ))}
                        <img width={image.width} height={image.height} src={image.src} alt={image.alt} itemProp="image" />
                      </picture>
                    </div>
                    <div className="jupiterx-post-content clearfix" itemProp="text" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
