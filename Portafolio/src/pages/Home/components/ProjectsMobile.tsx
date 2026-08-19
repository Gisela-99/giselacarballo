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
      logoType: 'img',
      display: 'browser' as const,
      tech: ['WordPress', 'Elementor', 'Figma', 'HTML/CSS', 'SEO', 'Diseño UI'],
      features: [
        'Rediseño completo del sitio web de esta agencia de viajes especializada en destinos por España y Portugal: diseñé la paleta de colores y los componentes en Figma, y los maqueté en WordPress. Desarrollé con IA un plugin de mapa interactivo y widgets personalizados en HTML/CSS. Colaboración remunerada continuada tras las prácticas.',
      ],
      status: '',
      repo: '',
      link: 'https://secretbarcelona.com/fr',
    },
    {
      title: 'Erova',
      image: MOVIL1_IMG,
      logo: LogoErova,
      logoType: 'video',
      display: 'mobile' as const,
      tech: ['React', 'Firebase', 'Cloudinary', 'Capacitor', 'Framer Motion', 'CSS Modules'],
      features: [
        'App de armario digital construida con React 19, Vite y Firebase. Implementé Firestore para la gestión de datos en tiempo real, integré Cloudinary para optimizar la carga de imágenes y Google Generative AI para recomendaciones de outfits personalizadas. Desarrollé los flujos de registro, armario virtual y comunidad, y adapté la app a iOS/Android con Capacitor para una experiencia nativa.',
      ],
      status: 'Prototipo funcional durante el desarrollo; actualmente pausado por costes de infraestructura (Firebase, Cloudinary, IA generativa).',
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
        'Me encargué de la maquetación frontend de las páginas públicas del proyecto (inicio, sobre nosotros, contacto y registro) con React y Tailwind CSS, e implementé las animaciones e interacciones con GSAP y Framer Motion para reforzar la experiencia de usuario en cada transición. El backend (Node.js, Express, PostgreSQL) y la validación de formularios fueron desarrollados por el resto del equipo.',
      ],
      status: 'Proyecto de bootcamp, activo como demo.',
      repo: '',
      link: 'https://planeo.vercel.app',
    },
  ];

  return (
    <div className={styles.projectsWrapper} id={id}>
      <h2 style={{ color: '#aa533f', textAlign: 'center', fontSize: '3rem' }}>Proyectos</h2>
      {projects.map((project, index) => (
        <div className={styles.projectSection} key={index}>
          <div className={styles.stickyMobile}>
            {project.display === 'mobile' ? (
              <div className={styles.mobileMockup}>
                <div className={styles.speaker}></div>
                <div className={styles.buttonPower}></div>
                <div className={styles.buttonVolume}></div>
                <div className={styles.buttonVolume2}></div>

                <div className={styles.mobileScreen}>
                  <img src={project.image} alt={project.title} />
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
                  <img src={project.image} alt={project.title} />
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
              {project.tech.map((t, i) => (
                <span key={i} className={styles.techBadge}>{t}</span>
              ))}
            </div>

            <section className={styles.featuresList}>
              {project.features.map((f, i) => (
                <p key={i}>{f}</p>
              ))}
            </section>

            {project.status && (
              <p className={styles.projectStatus}>{project.status}</p>
            )}

            <div className={styles.projectLinks}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  Ver sitio
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
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