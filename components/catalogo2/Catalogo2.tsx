import Image from "next/image";
import { BRAND } from "@/components/m2/content";
import { BACK, BACKGROUND, CATEGORIES, PACKAGES, TITLE } from "./content";
import styles from "./Catalogo2.module.css";

/**
 * /catalogo2/: índice del catálogo con el diseño de /m2/ (foto a todo el ancho, logo y panel
 * translúcido). Reutiliza el logo de /m2/ y sus estilos base (vía `composes` en el CSS Module).
 */
export default function Catalogo2() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        <Image src={BACKGROUND.src} alt="" fill sizes="100vw" priority className={styles.backgroundImage} />
      </div>
      <div className={styles.shadeTop} aria-hidden="true" />
      <div className={styles.shadeBottom} aria-hidden="true" />

      <div className={styles.layout}>
        <header className={styles.brand}>
          <p className={styles.logo}>
            <Image src={BRAND.logo.src} width={BRAND.logo.width} height={BRAND.logo.height} alt={BRAND.name} priority />
          </p>
        </header>

        <section className={styles.panel} aria-labelledby="catalogo-titulo">
          <h1 id="catalogo-titulo" className={styles.title}>
            {TITLE}
          </h1>

          <nav aria-label={TITLE}>
            <ul className={styles.categories}>
              {CATEGORIES.map((category) => (
                <li key={category.href}>
                  <a className={styles.category} href={category.href}>
                    <span>{category.label}</span>
                    <span aria-hidden="true" className={styles.arrow}>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className={styles.packages}>
            {PACKAGES.map((item) => (
              <li key={item.href}>
                <a className={styles.card} href={item.href} target="_blank" rel="noopener">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 50vw, 200px"
                    className={styles.cardImage}
                    style={{ objectPosition: item.position }}
                  />
                  <span className={styles.cardLabel}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <footer className={styles.footer}>
            <a className={styles.back} href={BACK.href} target="_blank" rel="noopener">
              <span aria-hidden="true" className={styles.backArrow}>
                ←
              </span>
              {BACK.label}
            </a>
          </footer>
        </section>
      </div>
    </main>
  );
}
