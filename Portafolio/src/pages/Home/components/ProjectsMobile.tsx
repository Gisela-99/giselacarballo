import styles from './ProjectsMobile.module.css';
import MOVIL1_IMG from '../../../assets/Erova/armario.png';
import MOVIL2_VIDEO from '../../../assets/Planeo/Header-Planeo.png';
// import MOVIL2_VIDEO from '../../../assets/Planeo/PantallaInicioPlaneo.mp4';
import LogoErova from '../../../assets/Erova/logo_carga_erova.webm'
import SECRET_IMG from '../../../assets/SecretBarcelona/PortadaSecretBarcelona.png';
import LogoSecretBarcelona from '../../../assets/SecretBarcelona/Logo-SecretBarcelona.svg'


  type Props = {
  id?: string;
};
function ProjectsMobile({ id }: Props) {
  
 const projects = [
  {
  title: 'Secret Barcelona',
  image: SECRET_IMG,
  logo: LogoSecretBarcelona,
  logoType: 'img',
  type: 'img',
  isWebsite: true,
  tech: ['WordPress', 'Elementor', 'Figma', 'HTML/CSS', 'SEO', 'Diseño UI'],
  features: [
    'Rediseño completo del sitio web de esta agencia de viajes especializada en destinos a medida por España y Portugal: definí la nueva paleta de colores y diseñé los componentes en Figma antes de maquetar en WordPress, creando una identidad visual coherente de principio a fin. Desarrollé con ayuda de IA un plugin de mapa interactivo para gestionar y añadir eventos, e implementé widgets personalizados en HTML/CSS para funcionalidades a medida, como un puzzle interactivo. Colaboración remunerada continuada tras las prácticas, desarrollando nuevas páginas para el sitio.',
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
    type: 'img',
    isWebsite: false,
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
  image: MOVIL2_VIDEO,
  logo: null,
  type: 'img',
  isWebsite: false,
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
      <h1 style={{color:'#aa533f', textAlign:'center', fontSize:'3rem'}}>Proyectos</h1>
      {projects.map((project, index) => (
        <div className={styles.projectSection} key={index}>
          <div className={styles.stickyMobile}>
            <div className={styles.mobileMockup}>
              <div className="speaker"></div>
              <div className="buttonPower"></div>
              <div className="buttonVolume"></div>
              <div className="buttonVolume2"></div>
              
              {/* Pantalla del móvil */}
              <div className={styles.mobileScreen}>
                {project.type === 'img' ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>
            </div>
          </div>

          <div className={styles.projectText}>
            <h2>{project.title}</h2>
          
            <div className={styles.logoContainer}>
              {project.logo && (
                <div className={styles.logoContainer}>
                  {project.logoType === 'video' ? (
                    <video src={project.logo} autoPlay loop muted playsInline />
                  ) : (
                    <img src={project.logo} alt={`Logo ${project.title}`} />
                  )}
                </div>
              )}
            </div>
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
