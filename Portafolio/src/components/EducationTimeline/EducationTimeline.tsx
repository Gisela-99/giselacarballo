import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
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

interface TimelineStaticEntry {
  key: string;
  side: "left" | "right";
  icon: React.ReactNode;
}

// Mantenemos la estructura estática técnica (iconos y disposición visual)
const staticEducationData: TimelineStaticEntry[] = [
  { key: "item0", side: "left", icon: <FaPalette /> },
  { key: "item1", side: "right", icon: <FaPaintBrush /> },
  { key: "item2", side: "left", icon: <FaWordpress /> },
  { key: "item3", side: "right", icon: <FaReact /> },
  { key: "item4", side: "left", icon: <FaMobileAlt /> },
  { key: "item5", side: "right", icon: <FaPython /> },
];

interface TimelineItemProps {
  entry: TimelineStaticEntry;
  index: number;
  onVisible: (index: number) => void;
  period: string;
  title: string;
  place: string;
  description: string;
}

function TimelineItem({
  entry,
  index,
  onVisible,
  period,
  title,
  place,
  description,
}: TimelineItemProps) {
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
      <div className={styles.entryPeriod}>{period}</div>
      <div className={styles.entryContent}>
        <h3>{title}</h3>
        <span className={styles.place}>{place}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

const EducationTimeline = () => {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLElement>(null);
  const highestVisibleRef = useRef(-1);

  // Cargar el array traducido desde los JSONs
  const translatedItems = t("education.items", { returnObjects: true }) as Array<{
    period: string;
    title: string;
    place: string;
    description: string;
  }>;

  const handleItemVisible = useCallback((index: number) => {
    if (index > highestVisibleRef.current) {
      highestVisibleRef.current = index;
    }
    const progress = (highestVisibleRef.current + 1) / staticEducationData.length;
    wrapperRef.current?.style.setProperty("--line-progress", progress.toString());
  }, []);

  return (
    <section
      className={styles.timelineWrapper}
      id="education"
      ref={wrapperRef as React.RefObject<HTMLElement>}
    >
      <h2 className={styles.sectionTitle}>{t("education.sectionTitle")}</h2>
      {staticEducationData.map((entry, index) => {
        const itemData = translatedItems[index] || {};
        return (
          <TimelineItem
            key={`${entry.key}-${index}`}
            entry={entry}
            index={index}
            onVisible={handleItemVisible}
            period={itemData.period}
            title={itemData.title}
            place={itemData.place}
            description={itemData.description}
          />
        );
      })}
    </section>
  );
};

export default EducationTimeline;