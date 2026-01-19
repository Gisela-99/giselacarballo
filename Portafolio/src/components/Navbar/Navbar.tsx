// import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import styles from './Navbar.module.css';
import { useState } from "react";


const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={className}>
        
        {/* BOTÓN HAMBURGUESA */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <span className={open ? styles.open : ""}></span>
          <span className={open ? styles.open : ""}></span>
          <span className={open ? styles.open : ""}></span>
        </div>

        {/* MENÚ */}
        <ul className={`${styles.navList} ${open ? styles.activeMenu : ""}`}>
          <li>
            {/* <Link to="/" className={styles.navLink}>Inicio</Link> */}
            <ScrollLink to="home" smooth={true} duration={500} className={styles.navLink}>
              Inicio
            </ScrollLink>
          </li>
          <li>
            {/* <Link to="about" className={styles.navLink}>Sobre Mí</Link> */}
            <ScrollLink to="about" smooth={true} duration={500} className={styles.navLink}>
              Sobre Mí
            </ScrollLink>
          </li>
          <li>
             <ScrollLink to="projects" smooth={true} duration={500} className={styles.navLink}>
              Proyectos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} className={styles.navLink}>
              Contacto
            </ScrollLink>
            {/* <Link to="contact" className={styles.navLink}>Contacto</Link> */}
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
