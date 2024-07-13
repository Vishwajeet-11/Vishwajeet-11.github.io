import blog from '../../assets/blog.jpeg';
import fitLift from '../../assets/fitlift.png';
import rtc from '../../assets/rtc.jpeg';
import viberr from '../../assets/viberr.jpeg';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Vishwajeet-11/hospital_management_sysetm"
          h3="Hospital Management"
          p="MERN Application"
        />
        <ProjectCard
          src={rtc}
          link="https://github.com/Vishwajeet-11/websocket_chat_application"
          h3="RTC code Editor"
          p="Collaborative Socket Editor"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/Vishwajeet-11/MERN_Blog_Application"
          h3="BLOG APP"
          p="Tech Blogging App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
