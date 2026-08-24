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
        <h1 className={styles.title}>Gisela Carballo Urquidi</h1>

        <p className={styles.subtitle}>
          <Typewriter
            steps={[
              { type: "write", text: "Frontend Developer" },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
              { type: "write", text: "React & TypeScript Specialist" },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
              { type: "write", text: "UI/UX Designer & Figma" },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
            ]}
            speed={45}
            loop
            triggerOnScroll={false}
            hideCursorWhenDone={false}
          />
        </p>

        {/* Breve pitch de impacto para reclutadores */}
        <p className={styles.description}>
          Graduada en Historia del Arte reconvertida a Frontend.
          Construyo interfaces web y apps móviles combinando sensibilidad estética, lógica de código y diseño UI.
        </p>

        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.buttonHeroPrimary}>
            Ver Proyectos
          </a>
          <a 
            href="/Gisela_Carballo_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Gisela_Carballo_CV.pdf"
            className={styles.buttonHeroSecondary}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;