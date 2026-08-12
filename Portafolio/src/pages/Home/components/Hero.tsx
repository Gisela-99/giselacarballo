import { useRef } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--mouse-x", `${x}%`);
    hero.style.setProperty("--mouse-y", `${y}%`);

    // parallax: las luces se mueven ligeramente en dirección opuesta al cursor
    const moveX = (x - 50) * 0.3;
    const moveY = (y - 50) * 0.3;
    hero.style.setProperty("--parallax-x", `${moveX}px`);
    hero.style.setProperty("--parallax-y", `${moveY}px`);
  };

  return (
    <section
      className={styles.hero}
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.light1}></div>
      <div className={styles.light2}></div>
      <div className={styles.light3}></div>
      <div className={styles.cursorLight}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Gisela Carballo Urquidi</h1>
        <p className={styles.subtitle}>Desarrolladora Frontend</p>

        <a href="#projects" className={styles.buttonHero}>
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}

export default Hero;