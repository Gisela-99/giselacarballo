import { useState } from "react";
import styles from "./Footer.module.css";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Introduce un email válido";
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
      valid = false;
    } else if (form.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulación de envío (conectar con Web3Forms, Formspree o EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className={styles.footerContainer} id="contact">
      <div className={styles.footerGrid}>
        {/* SECCIÓN INFORMACIÓN DE CONTACTO */}
        <div className={styles.contactSection}>
          <h2 className={styles.footerTitle}>Contacto</h2>
          <p className={styles.contactSubtitle}>
            ¿Tienes una propuesta o quieres hablar sobre una colaboración? Escríbeme directamente.
          </p>

          <div className={styles.cardsWrapper}>
            <div className={styles.contactCard}>
              <span className={styles.icon}>
                <HiOutlineMail size={24} />
              </span>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>Email</span>
                <p className={styles.text}>giselacarballour@gmail.com</p>
              </div>
              <button
                type="button"
                className={styles.actionBtn}
                aria-label="Copiar email"
                onClick={() => copyToClipboard("giselacarballour@gmail.com")}
              >
                {copied ? <FaCheck color="#4ADE80" /> : <FaCopy />}
              </button>
            </div>

            <a
              className={styles.contactCardLink}
              href="https://www.linkedin.com/in/giselacarballourquidi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <FaLinkedin size={24} />
              </span>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>LinkedIn</span>
                <p className={styles.text}>giselacarballourquidi</p>
              </div>
              <span className={styles.actionIcon}>
                <FaExternalLinkAlt size={14} />
              </span>
            </a>

            <a
              className={styles.contactCardLink}
              href="https://github.com/Gisela-99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <FaGithub size={24} />
              </span>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>GitHub</span>
                <p className={styles.text}>@Gisela-99</p>
              </div>
              <span className={styles.actionIcon}>
                <FaExternalLinkAlt size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* SECCIÓN FORMULARIO */}
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Envíame un mensaje</h3>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="¿En qué puedo ayudarte?"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : (
                <>
                  Enviar mensaje <FaPaperPlane size={14} />
                </>
              )}
            </button>

            {success && (
              <p className={styles.success}>
                ¡Mensaje enviado correctamente! Te responderé lo antes posible. 💌
              </p>
            )}
          </form>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Gisela Carballo Urquidi — Desarrolladora Frontend</p>
      </div>
    </footer>
  );
}

export default Footer;