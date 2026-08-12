import Hero from "./components/Hero";
import Typewriter from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsMobile from "./components/ProjectsMobile";
import styles from "./Home.module.css";
import InfiniteIconCarousel from "../../components/InfiniteCarousel/InfiniteCarousel";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt,FaWordpress } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiFirebase } from "react-icons/si"
import { IoLogoCapacitor } from "react-icons/io5";

export default function Home() {

   
  return (
    <div className={styles.container}>
      <Hero/>
      <section id="about">
        <Typewriter
          className={styles.typewriter}
           speed={70}
           loop={false}
          triggerOnScroll
          steps={[
        
            {type: "write", text: " Hola, Soy Gisela. Una programadora frontend apasionada por crear experiencias digitales que combinan diseño y funcionalidad. Mi formación en Historia del Arte me ha brindado creatividad, sensibilidad estética y atención al detalle, cualidades que aplico en cada proyecto que desarrollo" },
          ]}
        />
      </section>
      <InfiniteIconCarousel
        size={70}        
        speed={22}       
        items={[
          <FaReact color="#61DBFB" />,
          <SiTypescript color="#3178C6" />,
          <SiJavascript color="#F7DF1E" />,
          <FaGithub color="purple" />,
          <FaHtml5 color="#E34F26" />,
          <FaCss3Alt color="#1572B6" />,
          <IoLogoCapacitor color="#3880FF" />,
          <FaWordpress color="#21759B" />,
          <SiFirebase color="#FFCA28" />,
        ]}
      />
      
      <ProjectsMobile id="projects" />  
      <ProjectsSection />
    </div>
  );
}
