import { useEffect, useRef, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./AboutSection.module.css";
import { FaPalette, FaCode, FaMobileAlt, FaLayerGroup } from "react-icons/fa";

const AboutSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ""}`} 
      id="about"
    >
      <h2 className={styles.sectionTitle}>{t("about.title")}</h2>

      <p className={styles.aboutText}>
        <Trans
          i18nKey="about.text"
          components={{
            1: <span className={styles.highlight} />,
            3: <span className={styles.highlight} />
          }}
        />
      </p>

      {/* Tarjetas de pilares clave para lectura rápida */}
      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaPalette /></div>
          <h3>{t("about.pillar1Title")}</h3>
          <p>{t("about.pillar1Desc")}</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaCode /></div>
          <h3>{t("about.pillar2Title")}</h3>
          <p>{t("about.pillar2Desc")}</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaMobileAlt /></div>
          <h3>{t("about.pillar3Title")}</h3>
          <p>{t("about.pillar3Desc")}</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaLayerGroup /></div>
          <h3>{t("about.pillar4Title")}</h3>
          <p>{t("about.pillar4Desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;