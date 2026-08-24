import styles from './ProjectsMobile.module.css';
import MOVIL1_IMG from '../../../assets/Erova/armario.png';
import DESKTOP_PLANEO from '../../../assets/Planeo/PLANEO-HEADER.png';
import LogoErova from '../../../assets/Erova/logo_carga_erova.webm';
import DESKTOP_SECRET from '../../../assets/SecretBarcelona/Desktop-Secret.png';
import LogoSecretBarcelona from '../../../assets/SecretBarcelona/Logo-SecretBarcelona.svg';

type Props = {
  id?: string;
};

function ProjectsMobile({ id }: Props) {
  const projects = [
    {
      title: 'Secret Barcelona',
      image: DESKTOP_SECRET,
      logo: LogoSecretBarcelona,
      logoType: 'img' as const,
      display: 'browser' as const,
      tech: ['WordPress', 'Elementor', 'Figma', 'HTML/CSS', 'SEO', 'Diseño UI'],
      features: [
        'Realicé el rediseño completo del sitio web en Figma y maqueté los componentes en WordPress para esta agencia de viajes. Desarrollé con IA un plugin de mapa interactivo y widgets personalizados en HTML/CSS, además de aplicar optimizaciones SEO. Tras las prácticas, la empresa continuó contando conmigo para una colaboración remunerada.',
      ],
      status: '',
      repo: '',
      link: 'https://secretbarcelona.com/fr',
    },
    {
      title: 'Erova',
      image: MOVIL1_IMG,
      logo: LogoErova,
      logoType: 'video' as const,
      display: 'mobile' as const,
      tech: ['React 19', 'Firebase', 'Cloudinary', 'Capacitor', 'Framer Motion', 'CSS Modules'],
      features: [
        'Desarrollé una aplicación de armario digital multiplataforma (iOS/Android) con React y Capacitor. Implementé Firestore para gestión de datos en tiempo real, Cloudinary para la optimización de imágenes e integré la API de Google Generative AI para generar sugerencias de outfits personalizadas.',
      ],
      status: 'Prototipo funcional activo; uso de APIs en la nube e IA limitado para optimizar y controlar los costes de consumo.',
      repo: '',
      link: '',
    },
    {
      title: 'Planeo',
      image: DESKTOP_PLANEO,
      logo: null,
      logoType: null,
      display: 'browser' as const,
      tech: ['React', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
      features: [
        'Me encargué del desarrollo frontend de las páginas públicas del proyecto. Construí la interfaz responsiva con React y Tailwind CSS, e implementé animaciones complejas e interacciones con GSAP y Framer Motion para enriquecer la experiencia de usuario, integrando la UI con el trabajo del equipo de backend.',
      ],
      status: 'Proyecto de bootcamp desplegado y activo como demo.',
      repo: '',
      link: 'https://planeo.vercel.app',
    },
  ];

  return (
    <div className={styles.projectsWrapper} id={id}>
      <h2 className={styles.sectionTitle}>Proyectos</h2>
      {projects.map((project) => (
        <div className={styles.projectSection} key={project.title}>
          <div className={styles.stickyMobile}>
            {project.display === 'mobile' ? (
              <div className={styles.mobileMockup}>
                <div className={styles.speaker}></div>
                <div className={styles.buttonPower}></div>
                <div className={styles.buttonVolume}></div>
                <div className={styles.buttonVolume2}></div>

                <div className={styles.mobileScreen}>
                  <img src={project.image} alt={`Captura de pantalla de ${project.title}`} />
                </div>
              </div>
            ) : (
              <div className={styles.browserMockup}>
                <div className={styles.browserBar}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.browserScreen}>
                  <img src={project.image} alt={`Captura de pantalla de ${project.title}`} />
                </div>
              </div>
            )}
          </div>

          <div className={styles.projectText}>
            <h2>{project.title}</h2>

            {project.logo && (
              <div className={styles.logoContainer}>
                {project.logoType === 'video' ? (
                  <video src={project.logo} autoPlay loop muted playsInline />
                ) : (
                  <img src={project.logo} alt={`Logo ${project.title}`} />
                )}
              </div>
            )}

            <div className={styles.techWrapper}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techBadge}>
                  {t}
                </span>
              ))}
            </div>

            <div className={styles.featuresList}>
              {project.features.map((f, idx) => (
                <p key={idx}>{f}</p>
              ))}
            </div>

            {project.status && (
              <p className={styles.projectStatus}>{project.status}</p>
            )}

            <div className={styles.projectLinks}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  Ver sitio
                  <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtnSecondary}
                >
                  Ver código
                  <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              )}
           </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsMobile;