import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Navbar.module.css";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../Hooks/useTheme";
import NavbarLogo from "../../assets/Logo/Logo-Gisela.svg";

type Language = "es" | "en" | "fr";

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language?.slice(0, 2).toLowerCase()) ||
    LANGUAGES[0];

  const closeMenu = () => {
    setOpen(false);
    setLangDropdownOpen(false);
  };

  // 1. Bloquear/desbloquear el scroll de la página cuando el menú está abierto en móvil
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 2. Cerrar con click fuera o con la tecla Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectLanguage = (lang: LanguageOption) => {
    i18n.changeLanguage(lang.code);
    setLangDropdownOpen(false);
    closeMenu();
  };

  return (
    <header className={`${styles.header} ${className || ""}`}>
      <nav className={styles.navContainer}>
        {/* LOGO */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className={styles.logoLink}
          onClick={closeMenu}
        >
          <img src={NavbarLogo} alt="Gisela Carballo Urquidi" className={styles.logo} />
        </ScrollLink>

        {/* BOTÓN HAMBURGUESA */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <span className={open ? styles.open : ""}></span>
          <span className={open ? styles.open : ""}></span>
          <span className={open ? styles.open : ""}></span>
        </button>

        {/* MENÚ */}
        <div className={`${styles.menuWrapper} ${open ? styles.activeMenu : ""}`}>
          <ul className={styles.navList}>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.activeLink}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t("nav.about")}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.activeLink}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t("nav.projects")}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.activeLink}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t("nav.education")}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.activeLink}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t("nav.contact")}
              </ScrollLink>
            </li>
          </ul>

          {/* CONTROLES (IDIOMA Y TEMA) */}
          <div className={styles.controls}>
            {/* DROPDOWN DE IDIOMAS */}
            <div className={styles.langDropdownWrapper} ref={dropdownRef}>
              <button
                type="button"
                className={styles.langSelectorBtn}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
              >
                <span>{currentLang.flag}</span>
                <span className={styles.langCode}>{currentLang.code.toUpperCase()}</span>
                <span className={`${styles.arrow} ${langDropdownOpen ? styles.arrowUp : ""}`}>▾</span>
              </button>

              {langDropdownOpen && (
                <ul className={styles.langDropdownMenu}>
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        className={`${styles.langOption} ${currentLang.code === lang.code ? styles.selectedLang : ""}`}
                        onClick={() => handleSelectLanguage(lang)}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* BOTÓN DE TEMA */}
            <button
              type="button"
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;