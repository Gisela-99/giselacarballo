import styles from "./EducationTimeline.module.css";

interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  description: string;
  side: "left" | "right";
}

const educationData: TimelineEntry[] = [
  {
    period: "2018 - 2023",
    title: "Grado en Historia del Arte",
    place: "Universidad Autónoma de Barcelona",
    description: "Formación en análisis visual, historia cultural y sensibilidad estética, hoy aplicada al diseño de interfaces.",
    side: "left",
  },
  {
    period: "Ene - Mar 2024",
    title: "Diseño Gráfico y Creación de Contenidos",
    place: "GRI",
    description: "Edición de imágenes con Photoshop y de vídeo, con enfoque en producción y optimización de contenido digital.",
    side: "right",
  },
  {
    period: "Abr - Jul 2024",
    title: "Confección y Publicación de Páginas Web",
    place: "Centre d'Estudis The Corner",
    description: "Gestión y mantenimiento técnico de temas y plugins en WordPress, con personalizaciones básicas.",
    side: "left",
  },
  {
    period: "Sep - Dic 2024",
    title: "JavaScript y React.js",
    place: "Fundación Esplai",
    description: "Implementación del frontend público de Planeo con React y TypeScript, componentización y animaciones con GSAP y Framer Motion.",
    side: "right",
  },
  {
    period: "Feb - Nov 2025",
    title: "Desarrollo de Aplicación Móvil (Erova)",
    place: "Apps Factory (Aspasia)",
    description: "Desarrollo de una app de armario digital con sistema de recomendaciones, con React, React Native y Firebase.",
    side: "left",
  },
  {
    period: "Feb - Mar 2026",
    title: "Fundamentos de Programación en Python",
    place: "La Salle URL",
    description: "Formación práctica en Python: sintaxis, estructuras de datos y resolución de problemas.",
    side: "right",
  },
];

const EducationTimeline = () => {
  return (
    <section className={styles.timelineWrapper} id="education">
      <h2 className={styles.sectionTitle}>Educación</h2>
      {educationData.map((entry, index) => (
        <div key={index} className={`${styles.timelineEntry} ${styles[entry.side]}`}>
          <div className={styles.marker}>
            <svg viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5L4.5 12.36V16c0 2.21 3.36 4 7.5 4s7.5-1.79 7.5-4v-3.64L12 16.5z" />
            </svg>
          </div>
          <div className={styles.entryPeriod}>{entry.period}</div>
          <div className={styles.entryContent}>
            <h3>{entry.title}</h3>
            <span className={styles.place}>{entry.place}</span>
            <p>{entry.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationTimeline;