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
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  Ver código
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