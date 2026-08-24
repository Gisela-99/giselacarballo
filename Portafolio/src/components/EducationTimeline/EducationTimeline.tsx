import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./EducationTimeline.module.css";
// Importamos los iconos dinámicos de react-icons/fa
import { 
  FaPalette, 
  FaPaintBrush, 
  FaWordpress, 
  FaReact, 
  FaMobileAlt, 
  FaPython 
} from "react-icons/fa";

interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  description: string;
  side: "left" | "right";
  icon: React.ReactNode;
}

const educationData: TimelineEntry[] = [
  {
    period: "2018 - 2023",
    title: "Grado en Historia del Arte",
    place: "Universidad Autónoma de Barcelona",
    description: "Formación en análisis visual, historia cultural y sensibilidad estética, aportando criterio para el diseño de interfaces.",
    side: "left",
    icon: <FaPalette />,
  },
  {
    period: "Ene - Mar 2024",
    title: "Diseño Gráfico y Creación de Contenidos",
    place: "GRI",
    description: "Edición de imágenes con Photoshop y vídeo, enfocada en la producción de contenido digital.",
    side: "right",
    icon: <FaPaintBrush />,
  },
  {
    period: "Abr - Jul 2024",
    title: "Confección y Publicación de Páginas Web",
    place: "Centre d'Estudis The Corner",
    description: "Introducción a los fundamentos del desarrollo web (HTML/CSS) y gestión básica de contenidos en WordPress.",
    side: "left",
    icon: <FaWordpress />,
  },
  {
    period: "Sep - Dic 2024",
    title: "JavaScript y React.js",
    place: "Fundación Esplai",
    description: "Desarrollo frontend con React, TypeScript y animaciones interactivas con GSAP y Framer Motion.",
    side: "right",
    icon: <FaReact />,
  },
  {
    period: "Feb - Nov 2025",
    title: "Desarrollo de Aplicaciones Móviles",
    place: "Apps Factory (Aspasia)",
    description: "Desarrollo de aplicaciones móviles con React, Capacitor y gestión de datos con Firebase.",
    side: "left",
    icon: <FaMobileAlt />,
  },
  {
    period: "Feb - Mar 2026",
    title: "Fundamentos de Programación en Python",
    place: "La Salle URL",
    description: "Formación práctica en sintaxis, estructuras de datos y resolución de problemas algorítmicos.",
    side: "right",
    icon: <FaPython />,
  },
];

function TimelineItem({
  entry,
  index,
  onVisible,
}: {
  entry: TimelineEntry;
  index: number;
  onVisible: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entryObs]) => {
        if (entryObs.isIntersecting) {
          setIsVisible(true);
          onVisible(index);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, onVisible]);

  return (
    <div
      ref={ref}
      className={`${styles.timelineEntry} ${styles[entry.side]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      {/* Círculo con el icono dinámico */}
      <div className={styles.marker}>
        {entry.icon}
      </div>
      <div className={styles.entryPeriod}>{entry.period}</div>
      <div className={styles.entryContent}>
        <h3>{entry.title}</h3>
        <span className={styles.place}>{entry.place}</span>
        <p>{entry.description}</p>
      </div>
    </div>
  );
}

const EducationTimeline = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const highestVisibleRef = useRef(-1);

  const handleItemVisible = useCallback((index: number) => {
    if (index > highestVisibleRef.current) {
      highestVisibleRef.current = index;
    }
    const progress = (highestVisibleRef.current + 1) / educationData.length;
    wrapperRef.current?.style.setProperty("--line-progress", progress.toString());
  }, []);

  return (
    <section
      className={styles.timelineWrapper}
      id="education"
      ref={wrapperRef as React.RefObject<HTMLElement>}
    >
      <h2 className={styles.sectionTitle}>Formación</h2>
      {educationData.map((entry, index) => (
        <TimelineItem
          key={`${entry.title}-${index}`}
          entry={entry}
          index={index}
          onVisible={handleItemVisible}
        />
      ))}
    </section>
  );
};

export default EducationTimeline;