import { useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import Typewriter from "./TypewriterSection";

function Hero() {
  const { t, i18n } = useTranslation();
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
            key={i18n.language} // Reinicia el Typewriter si el usuario cambia el idioma
            steps={[
              { type: "write", text: t("hero.role1") },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
              { type: "write", text: t("hero.role2") },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
              { type: "write", text: t("hero.role3") },
              { type: "pause", duration: 1800 },
              { type: "delete", count: "all" },
            ]}
            speed={45}
            loop
            triggerOnScroll={false}
            hideCursorWhenDone={false}
          />
        </p>

        {/* Breve pitch de impacto traducido */}
        <p className={styles.description}>
          {t("hero.description")}
        </p>

        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.buttonHeroPrimary}>
            {t("hero.viewProjects")}
          </a>
          <a 
            href={`/${t("hero.cvFileName")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            download={t("hero.cvFileName")}
            className={styles.buttonHeroSecondary}
          >
            {t("hero.downloadCv")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;