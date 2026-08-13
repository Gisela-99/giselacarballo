import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <p className={`${styles.aboutText} ${styles.visible}`}>
        Soy desarrolladora frontend con formación en Historia del Arte — ese cruce entre{" "}
        <span className={styles.highlight}>análisis visual y lógica de código</span> es lo
        que más disfruto de mi trabajo. Programo con{" "}
        <span className={styles.highlight}>React y TypeScript</span>, y también diseño en
        Figma, así que puedo llevar una interfaz desde el boceto hasta el código
        funcionando. He trabajado tanto en apps (React Native) como en sitios web de
        cliente real (WordPress), y me gusta especialmente cuando{" "}
        <span className={styles.highlight}>diseño y desarrollo van de la mano</span> en un
        mismo equipo.
      </p>
    </section>
  );
};

export default AboutSection;