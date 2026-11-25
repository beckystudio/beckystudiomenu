"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ABOUT, BRANCHES } from "./content";
import { CloseIcon } from "./icons";
import styles from "./AboutDialog.module.css";

/**
 * Botón "Conócenos más →" y su diálogo (como "Conóceme más" en la referencia):
 * dos fotos, presentación con 4 bloques numerados, "Solo con cita previa" y sucursales.
 */
export default function AboutDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(0);
  const baseId = useId();

  const show = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className={styles.trigger} onClick={show} aria-haspopup="dialog">
        {ABOUT.trigger}
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={`${baseId}-title`}
        // Clic fuera del contenido (en el fondo) cierra el diálogo.
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className={styles.photos}>
          {ABOUT.photos.map((photo) => (
            <div key={photo.src} className={styles.photo}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 560px) 46vw, 256px" className={styles.photoImage} />
            </div>
          ))}
          <button type="button" className={styles.close} onClick={close} aria-label="Cerrar">
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.body}>
          <h2 id={`${baseId}-title`} className={styles.title}>
            <span>{ABOUT.title}</span>
          </h2>

          <div className={styles.blocks}>
            {ABOUT.blocks.map((block, index) => {
              const isOpen = open === index;
              const panelId = `${baseId}-panel-${index}`;
              const number = String(index + 1).padStart(2, "0");
              return (
                <section key={number} className={`${styles.block} ${isOpen ? styles.blockOpen : ""}`}>
                  <h3 className={styles.blockHeading}>
                    <button
                      type="button"
                      className={styles.blockButton}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className={styles.blockLabel}>
                        <span className={styles.blockNumber}>{number}</span>
                        {block.title}
                      </span>
                      <span className={styles.blockToggle} aria-hidden="true">
                        {isOpen ? "—" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} className={styles.blockPanel} hidden={!isOpen}>
                    <p className={styles.blockText}>
                      {block.body.map((part, i) => (part.em ? <em key={i}>{part.text}</em> : <span key={i}>{part.text}</span>))}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>

          <p className={styles.appointment}>
            <span>{ABOUT.appointmentOnly}</span>
          </p>

          <ul className={styles.branches}>
            {BRANCHES.map((branch) => (
              <li key={branch.name} className={styles.branch}>
                <p className={styles.branchName}>{branch.name}</p>
                <p className={styles.branchAddress}>{branch.address}</p>
                <p className={styles.branchLinks}>
                  <a href={branch.whatsapp} target="_blank" rel="noopener">
                    Agendar cita
                  </a>
                  <a href={branch.map} target="_blank" rel="noopener">
                    Ver mapa
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
