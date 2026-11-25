import Image, { getImageProps } from "next/image";
import AboutDialog from "./AboutDialog";
import { BRAND, EXPLORE, HERO_IMAGES, SOCIAL, WHATSAPP } from "./content";
import { PhoneIcon, SOCIAL_ICONS } from "./icons";
import styles from "./Landing.module.css";

/**
 * /m2/: página de una sola pantalla con la estructura de axeldejose.com, adaptada a Becky Studio.
 * Foto a todo el ancho, logo y un panel con eslogan, accesos, llamadas a la acción y redes.
 * "Conócenos más" abre un diálogo con fotos, presentación (01–04), citas y sucursales.
 */
export default function Landing() {
  // Foto distinta en celular y en computadora (dirección de arte), como en la referencia.
  const common = { alt: HERO_IMAGES.desktop.alt, fill: true, sizes: "100vw", priority: true } as const;
  const desktop = getImageProps({ ...common, src: HERO_IMAGES.desktop.src }).props;
  const mobile = getImageProps({ ...common, src: HERO_IMAGES.mobile.src, alt: HERO_IMAGES.mobile.alt }).props;

  return (
    <main className={styles.page}>
      <picture className={styles.background}>
        <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
        <source media="(max-width: 767.98px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
        <img {...desktop} className={styles.backgroundImage} />
      </picture>
      <div className={styles.shadeTop} aria-hidden="true" />
      <div className={styles.shadeBottom} aria-hidden="true" />

      <div className={styles.layout}>
        <header className={styles.brand}>
          <h1 className={styles.logo}>
            <Image src={BRAND.logo.src} width={BRAND.logo.width} height={BRAND.logo.height} alt={BRAND.name} priority />
          </h1>
        </header>

        <section className={styles.panel} aria-label="Becky Studio">
          <div className={styles.intro}>
            <p className={styles.slogan}>
              {BRAND.slogan.lead} <em>{BRAND.slogan.leadEm}</em>
              <br />
              {BRAND.slogan.tail} <em>{BRAND.slogan.tailEm}</em>
            </p>
            <p className={styles.subtitle}>{BRAND.subtitle}</p>
            <p className={styles.explore}>{EXPLORE.title}</p>
          </div>

          <nav aria-label={EXPLORE.title}>
            <ul className={styles.cards}>
              {EXPLORE.items.map((item) => (
                <li key={item.href}>
                  <a className={styles.card} href={item.href}>
                    <Image src={item.image} alt="" fill sizes="(max-width: 767px) 33vw, 140px" className={styles.cardImage} />
                    <span className={styles.cardLabel}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a className={styles.primary} href={WHATSAPP.href} target="_blank" rel="noopener">
              <PhoneIcon className={styles.primaryIcon} />
              {WHATSAPP.label}
            </a>
            <AboutDialog />
          </div>

          <footer className={styles.footer}>
            <span className={styles.location}>{BRAND.location}</span>
            <nav aria-label="Redes sociales">
              <ul className={styles.social}>
                {SOCIAL.map((s) => {
                  const Icon = SOCIAL_ICONS[s.network];
                  return (
                    <li key={s.network}>
                      <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} className={styles.socialLink}>
                        <Icon className={styles.socialIcon} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </footer>
        </section>
      </div>
    </main>
  );
}
