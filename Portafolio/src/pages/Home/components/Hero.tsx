import { useRef } from "react";
import styles from "./Hero.module.css";
import Typewriter from "./TypewriterSection";

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
        {/* El nombre se queda estático: es tu identidad, no necesita animarse */}
        <h1 className={styles.title}>Gisela Carballo Urquidi</h1>

        {/* El subtítulo rota entre tus 3 perfiles reales con el Typewriter */}
        <p className={styles.subtitle}>
          <Typewriter
            steps={[
              { type: "write", text: "Desarrolladora Frontend" },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
              { type: "write", text: "Diseñadora UI/UX" },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
              { type: "write", text: "WordPress & Figma" },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
            ]}
            speed={45}
            loop
            triggerOnScroll={false}
            hideCursorWhenDone={false}
          />
        </p>

        <a href="#projects" className={styles.buttonHero}>
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}

export default Hero;