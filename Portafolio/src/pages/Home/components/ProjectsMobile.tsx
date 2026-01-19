import styles from './ProjectsMobile.module.css';
import MOVIL1_IMG from '../../../assets/Erova/armario.png';
import MOVIL2_VIDEO from '../../../assets/Planeo/PantallaInicioPlaneo.mp4';
import LogoErova from '../../../assets/Erova/logo_carga_erova.webm'


  type Props = {
  id?: string;
};
function ProjectsMobile({ id }: Props) {
  const projects = [
    {
      title: 'Erova',
      image: MOVIL1_IMG,
      logo: LogoErova,
      type: 'img',
      tech: ['React', 'Firebase', 'Cloudinary', 'Capacitor','Framer Motion','CSS Moduls'],
      features: [
        ' Participé en el desarrollo de Erova, una app creada con React 19, Vite y Firebase. Con mi equipo implementamos Firestore para la gestión de datos, Cloudinary para optimizar imágenes y Google Generative AI para recomendaciones personalizadas. También desarrollamos flujos clave como registro, armario virtual y comunidad, y adaptamos la app a móviles con Capacitor.',
      ],
    },
    {
      title: 'Planeo',
      image: MOVIL2_VIDEO,
      logo: null,
      type: 'video',
      tech: ['React', 'Taiwilwind CSS','Zod', 'Node.js', 'Express', 'Drizzle','JsonWebToken','Cookies','PostgreSQL'],
      features: [
        'Me encargué de la maquetación y el diseño visual de las páginas públicas del proyecto (inicio, sobre nosotros, contacto y registro), incorporando animaciones con GSAP y Framer Motion para ofrecer una experiencia fluida y atractiva.'
      ],
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
            <div>
              {project.logo && (
                <div className={styles.logoContainer}>
                  <video src={project.logo} autoPlay loop muted playsInline  width={300}/>
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsMobile;
