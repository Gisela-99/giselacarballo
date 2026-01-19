import "./Footer.styles.css";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Actualizar inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validación

   const validate = () => {
  let valid = true;

  const newErrors: {
    name: string;
    email: string;
    message: string;
  } = {
    name: "",
    email: "",
    message: "",
  };

  if (!form.name.trim()) {
    newErrors.name = "El nombre es obligatorio";
    valid = false;
  }

  if (!form.email.trim()) {
    newErrors.email = "El email es obligatorio";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Email inválido";
    valid = false;
  }

  if (!form.message.trim()) {
    newErrors.message = "El mensaje es obligatorio";
    valid = false;
  } else if (form.message.length < 10) {
    newErrors.message = "Debe tener al menos 10 caracteres";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};
  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

    // Aquí puedes conectar EmailJS / Formspree
  };

  // Copiar texto
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .catch(() => alert("No se pudo copiar"));
  };

  return (
    <footer className="footerContainer" id="contact">
      <div className="footerGrid">
        {/* CONTACTO */}
        <div className="contactSection">
          <h3 className="footerTitle">Contacto</h3>

          <div className="contactCard">
            <span className="icon">
              <HiOutlineMail size={30} />
            </span>
            <p className="text">giselacarballour@gmail.com</p>
            <button
              type="button"
              className="action"
              aria-label="Copiar email"
              style={{backgroundColor:"transparent", border:"none"}}
              onClick={() =>
                copyToClipboard("giselacarballour@gmail.com")
              }
            >
              <FaCopy color="white"/>
            </button>
          </div>

          <div className="contactCard">
            <span className="icon">
              <FaLinkedin size={30} />
            </span>
            <p className="text">giselacarballourquidi</p>
            <a
              className="action"
              href="https://www.linkedin.com/in/giselacarballourquidi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a LinkedIn"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          <div className="contactCard">
            <span className="icon">
              <FaGithub size={30} />
            </span>
            <p className="text">@Gisela-99</p>
            <a
              className="action"
              href="https://github.com/Gisela-99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a GitHub"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="formSection">
          <h3 className="footerTitle">Envíame un mensaje</h3>

          <form className="contactForm" onSubmit={handleSubmit} noValidate>
            <div className="formGroup">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <div className="formGroup">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>

            <button type="submit" className="submitBtn">
              Enviar
            </button>

            {success && (
              <p className="success">
                ¡Mensaje enviado correctamente! 💌
              </p>
            )}
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
