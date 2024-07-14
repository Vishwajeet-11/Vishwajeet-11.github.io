import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import moon from "../../assets/moon.svg";
import heroImg from "../../assets/Screenshot_2024-07-14_052136-removebg-preview.png";
import sun from "../../assets/sun.svg";
import CV from "../../assets/vishwajeetBackend_resume.pdf";
// import twitterDark from '../../assets/twitter-dark.svg';
// import twitterLight from '../../assets/twitter-light.svg';
import { useTheme } from "../../common/ThemeContext";
import styles from "./HeroStyles.module.css";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          style={{ width: '500px', height: 'auto' }}
          alt="Profile picture of Vishwajeet Bharadia"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vishwajeet
          <br />
          Bharadia
        </h1>
        <h2>Backend Engineer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/Vishwajeet-11" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/vishwajeetbharadia" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Backend developer adept in AWS, API design, database management, and
          server-side logic. Delivering scalable solutions for web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
