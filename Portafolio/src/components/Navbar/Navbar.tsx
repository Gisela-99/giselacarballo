import { Link as ScrollLink } from "react-scroll";
import styles from './Navbar.module.css';
import { useState } from "react";
import { useTheme } from "../../Hooks/useTheme";
import NavbarLogo from "../../assets/Logo/Logo-Gisela.svg";

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const closeMenu = () => setOpen(false);

  return (
    <div className={styles.container}>
      <nav className={className}>

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <span className={open ? styles.open : ""}></span>
          <span className={open ? styles.open : ""}></span>
          <span className={open ? styles.open : ""}></span>
        </div>

        <ul className={`${styles.navList} ${open ? styles.activeMenu : ""}`}>
          <li>
            <ScrollLink to="home" smooth={true} duration={500} className={styles.navLink} onClick={closeMenu}>
              <img src={NavbarLogo} alt="Gisela Carballo Urquidi" className={styles.logo} />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} className={styles.navLink} onClick={closeMenu}>
              Sobre Mí
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500} className={styles.navLink} onClick={closeMenu}>
              Proyectos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="education" smooth={true} duration={500} className={styles.navLink} onClick={closeMenu}>
              Formación
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} className={styles.navLink} onClick={closeMenu}>
              Contacto
            </ScrollLink>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;