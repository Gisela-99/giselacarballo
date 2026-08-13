import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsMobile from "./components/ProjectsMobile";
import EducationSection from "../../components/EducationTimeline/EducationTimeline";
import AboutSection from "./components/AboutSection";
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
        <AboutSection />
      </section>
      <EducationSection></EducationSection>
      <ProjectsMobile id="projects" />  
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
      <ProjectsSection />
    </div>
  );
}
