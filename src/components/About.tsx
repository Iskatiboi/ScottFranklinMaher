import Lanyard from './Lanyard/Lanyard';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="about-content">
          <h2 className="about-title">
            ABOUT <span className="about-title-accent">ME</span>
          </h2>

          <div className="about-bio">
            <p>
              I'm a passionate web developer and IT specialist who thrives on
              creating seamless digital experiences. With a love for both
              technology and adventure, I bring a unique perspective to every
              project.
            </p>
            <p>
              From building responsive web applications to solving complex
              technical challenges, I'm always exploring new ways to push
              boundaries and deliver exceptional results.
            </p>
          </div>

          <div className="about-skills">
            <h3 className="about-skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item">React / TypeScript</div>
              <div className="skill-item">Node.js / Express</div>
              <div className="skill-item">Python / Django</div>
              <div className="skill-item">PostgreSQL / MongoDB</div>
              <div className="skill-item">Docker / Kubernetes</div>
              <div className="skill-item">AWS / Cloud Services</div>
              <div className="skill-item">CI/CD Pipelines</div>
              <div className="skill-item">REST APIs / GraphQL</div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <Lanyard
          position={[0, 1, 40]}
          gravity={[0, -40, 0]}
          fov={20}
          transparent={true}
        />
      </div>
    </section>
  );
}
