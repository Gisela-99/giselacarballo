import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* luces de fondo */}
      <div className={styles.light1}></div>
      <div className={styles.light2}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Gisela Carballo</h1>
        <p className={styles.subtitle}>Desarrolladora Frontend</p>

        <a href="#projects" className={styles.buttonHero}>
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}

export default Hero;
