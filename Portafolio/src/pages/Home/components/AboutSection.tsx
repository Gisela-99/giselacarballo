import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import { FaPalette, FaCode, FaMobileAlt, FaLayerGroup } from "react-icons/fa";

const AboutSection = () => {
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
      <h2 className={styles.sectionTitle}>Sobre Mí</h2>

      <p className={styles.aboutText}>
        Soy desarrolladora frontend con formación en Historia del Arte — ese cruce entre{" "}
        <span className={styles.highlight}>análisis visual y lógica de código</span> es lo
        que más disfruto de mi trabajo. Programo con{" "}
        <span className={styles.highlight}>React y TypeScript</span>, y también diseño en
        Figma, llevando interfaces desde el boceto hasta el código funcional.
      </p>

      {/* Tarjetas de pilares clave para lectura rápida */}
      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaPalette /></div>
          <h3>UI/UX & Figma</h3>
          <p>Sensibilidad estética y precisión visual aplicada al diseño de componentes.</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaCode /></div>
          <h3>React & TypeScript</h3>
          <p>Desarrollo web modular, tipado seguro y animaciones interactivas.</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaMobileAlt /></div>
          <h3>Apps & Web</h3>
          <p>Experiencia en apps móviles (Capacitor/Firebase) y webs de cliente real (WordPress).</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><FaLayerGroup /></div>
          <h3>Visión Global</h3>
          <p>Puente fluido entre el equipo de diseño y el desarrollo técnico frontend.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;