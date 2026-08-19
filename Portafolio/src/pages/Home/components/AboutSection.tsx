import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
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

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection} id="about">
      <p
        ref={textRef}
        className={`${styles.aboutText} ${isVisible ? styles.visible : ""}`}
      >
        Soy desarrolladora frontend con formación en Historia del Arte — ese cruce entre{" "}
        <span className={styles.highlight}>análisis visual y lógica de código</span> es lo
        que más disfruto de mi trabajo. Programo con{" "}
        <span className={styles.highlight}>React y TypeScript</span>, y también diseño en
        Figma, así que puedo llevar una interfaz desde el boceto hasta el código
        funcionando. He trabajado tanto en apps (React Native, como en{" "}
        <span className={styles.highlight}>Erova</span>) como en sitios web de cliente real
        (WordPress, como en <span className={styles.highlight}>Secret Barcelona</span>), y
        me gusta especialmente cuando{" "}
        <span className={styles.highlight}>diseño y desarrollo van de la mano</span> en un
        mismo equipo.
      </p>
    </section>
  );
};

export default AboutSection;