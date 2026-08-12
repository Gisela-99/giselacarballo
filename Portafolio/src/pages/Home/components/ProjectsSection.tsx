import { useState, useRef } from "react";
import styles from "./ProjectsSection.module.css";

import FOTO3 from "../../../assets/GRI/ACT1_Chica_gafas_Carballo_Gisela.jpg";
import FOTO4 from "../../../assets/GRI/ACT2_Carballo_Gisela (3).jpg";
import FOTO5 from "../../../assets/GRI/ACT4_Chica_sentada_Carballo_Gisela.jpg";
import FOTO6 from "../../../assets/GRI/ACT5_RGB_Carballo_Gisela.jpg";
import FOTO7 from "../../../assets/GRI/ACT7A_Carballo_Gisela (1).jpg";
import FOTO9 from "../../../assets/GRI/AE4_Carballo_Gisela.jpg";
import FOTO10 from "../../../assets/GRI/Act2_Carballo_Gisela.jpg";
import FOTO11 from "../../../assets/GRI/Act4_Carballo_Gisela (1).jpg";
import FOTO12 from "../../../assets/GRI/EF1_Gisela_Carballo.jpg";
import Video1 from "../../../assets/GRI/AE2_Carballo Urquidi,Gisela.mp4";

interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  { src: FOTO3, alt: "Retoque de retrato: chica con gafas, ajuste de color y luz" },
  { src: FOTO4, alt: "Composición fotográfica editada, ejercicio de retoque digital" },
  { src: FOTO5, alt: "Retrato editorial, chica sentada, corrección de tono de piel" },
  { src: FOTO6, alt: "Ajuste de color RGB sobre fotografía de estudio" },
  { src: FOTO7, alt: "Edición de imagen, ejercicio de composición y encuadre" },
  { src: FOTO9, alt: "Montaje fotográfico, práctica de edición avanzada" },
  { src: FOTO10, alt: "Retrato editado, ajuste de contraste y color" },
  { src: FOTO11, alt: "Ejercicio de retoque fotográfico, corrección de piel y luz" },
  { src: FOTO12, alt: "Edición fotográfica final, ajuste de efectos" },
];

const INITIAL_VISIBLE = 6;

function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleFotos = fotos.slice(0, visibleCount);
  const isExpanded = visibleCount >= fotos.length;

  const handleToggleVisible = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_VISIBLE);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setVisibleCount((c) => c + 3);
    }
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i === null ? null : i === 0 ? fotos.length - 1 : i - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i === null ? null : i === fotos.length - 1 ? 0 : i + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev(e as unknown as React.MouseEvent);
    if (e.key === "ArrowRight") showNext(e as unknown as React.MouseEvent);
  };

  return (
    <section className={styles.projectsWrapper} ref={sectionRef}>
      <h2 className={styles.title}>Edición y Diseño Gráfico</h2>
      <p className={styles.subtitle}>
        Ejercicios de retoque fotográfico y composición realizados durante
        mi formación en diseño gráfico digital.
      </p>

      {/* GRID DE IMÁGENES */}
      <div className={styles.grid}>
        {visibleFotos.map((foto, index) => (
          <button
            className={styles.card}
            key={index}
            onClick={() => openLightbox(index)}
            aria-label={`Ampliar: ${foto.alt}`}
          >
            <img src={foto.src} alt={foto.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {fotos.length > INITIAL_VISIBLE && (
        <div className={styles.moreButtonWrapper}>
          <button className={styles.moreButton} onClick={handleToggleVisible}>
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={showPrev}
              aria-label="Imagen anterior"
            >
              &#8249;
            </button>
            <img
              src={fotos[lightboxIndex].src}
              alt={fotos[lightboxIndex].alt}
            />
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={showNext}
              aria-label="Imagen siguiente"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      {/* VIDEO */}
      <div className={styles.videoContainer}>
        <video src={Video1} controls className={styles.video} />
      </div>
    </section>
  );
}

export default ProjectsSection;