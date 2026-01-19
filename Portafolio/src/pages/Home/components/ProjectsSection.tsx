import styles from "./ProjectsSection.module.css";

import FOTO3 from "../../../assets/GRI/ACT1_Chica_gafas_Carballo_Gisela.jpg";
import FOTO4 from "../../../assets/GRI/ACT2_Carballo_Gisela (3).jpg";
import FOTO5 from "../../../assets/GRI/ACT4_Chica_sentada_Carballo_Gisela.jpg";
import FOTO6 from "../../../assets/GRI/ACT5_RGB_Carballo_Gisela.jpg";
import FOTO7 from "../../../assets/GRI/ACT7A_Carballo_Gisela (1).jpg";
import FOTO9 from "../../../assets/GRI/AE4_Carballo_Gisela.jpg";
import FOTO10 from "../../../assets/GRI/Act2_Carballo_Gisela.jpg";
import FOTO11 from "../../../assets/GRI/Act4_Carballo_Gisela (1).jpg";
import FOTO12 from "../../../assets/GRI/EF1_Gisela_Carballo.jpg";
import Video1 from "../../../assets/GRI/AE2_Carballo Urquidi,Gisela.mp4";

const fotos = [
  FOTO3, FOTO4, FOTO5, FOTO6,
  FOTO7, FOTO9, FOTO10, FOTO11, FOTO12
];

function ProjectsSection() {
  return (
    <section className={styles.projectsWrapper}>
      <h2 className={styles.title}>Proyectos Digitales</h2>

      {/* GRID DE IMÁGENES */}
      <div className={styles.grid}>
        {fotos.map((foto, index) => (
          <div className={styles.card} key={index}>
            <img src={foto} alt={`Proyecto ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* VIDEO */}
      <div className={styles.videoContainer}>
        <video src={Video1} controls className={styles.video} />
      </div>
    </section>
  );
}

export default ProjectsSection;
