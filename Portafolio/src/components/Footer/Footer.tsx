import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
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
  const { t } = useTranslation();

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
      newErrors.name = t("footer.validation.nameRequired");
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = t("footer.validation.emailRequired");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("footer.validation.emailInvalid");
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = t("footer.validation.messageRequired");
      valid = false;
    } else if (form.message.length < 10) {
      newErrors.message = t("footer.validation.messageMin");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    emailjs
      .send(
        "service_h6u38jq",         // Service ID
        "template_th2i5x6",        // Template ID 
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "kpOXoGHZBP6kFjPtK"        // Public Key 
      )
      .then(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error("Error enviando el mensaje:", err);
        setIsSubmitting(false);
        alert(t("footer.messages.error"));
      });
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
          <h2 className={styles.footerTitle}>{t("footer.title")}</h2>
          <p className={styles.contactSubtitle}>
            {t("footer.subtitle")}
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

        {/* SECCIÓN FORMULARIO DE CONTACTO */}
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>{t("footer.formTitle")}</h3>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t("footer.labels.name")}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t("footer.placeholders.name")}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t("footer.labels.email")}</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t("footer.placeholders.email")}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t("footer.labels.message")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("footer.placeholders.message")}
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
              {isSubmitting ? t("footer.buttons.sending") : (
                <>
                  {t("footer.buttons.send")} <FaPaperPlane size={14} />
                </>
              )}
            </button>

            {success && (
              <p className={styles.success}>
                {t("footer.messages.success")}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Gisela Carballo Urquidi — {t("footer.role")}</p>
      </div>
    </footer>
  );
}

export default Footer;