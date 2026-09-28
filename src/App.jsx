import { useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import "./App.css";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="page">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <section id="home" className="hero section">
          <div className="hero-text">
            <p className="eyebrow">AI & FULL STACK DEVELOPER</p>
            <h1>
              Hi, I'm <span>Pallavi.</span>
            </h1>
            <p className="hero-description">
              BCA graduate | MCA student | Learning AI & Python Full Stack development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">View My Work</a>
              <a href="/Pallavi_2026_Resume.pdf" className="secondary-button" download>
                Download Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/pallavi-kh2026" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/pallavikhpallavi/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-card">
          <div className="photo-circle">
          <img src="/photo.jpeg" alt="Pallavi" />
          </div>
            <div className="floating-card top">React Developer</div>
            <div className="floating-card bottom">Python, SQL, AI</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Turning learning into real projects.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
                I am a BCA graduate currently pursuing MCA and building my
                skills in AI and Full Stack development.
              </p>
              <p>
                I like learning by creating projects. My current focus is
                React, JavaScript, Python, SQL and modern web development.
              </p>
            </div>

            <div className="about-stats">
              <div><strong>MCA</strong><span>Student</span></div>
              <div><strong>AI + FS</strong><span>Learning</span></div>
              <div><strong>3+</strong><span>Projects</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section soft-section">
          <div className="section-heading">
            <p className="eyebrow">SKILLS</p>
            <h2>Technologies I work with.</h2>
          </div>

          <div className="skills-grid">
            {["React", "JavaScript", "HTML & CSS", "Python", "SQL", "Git & GitHub", "Linux"].map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">MY WORK</p>
            <h2>Projects I'm building.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section id="education" className="section soft-section">
          <div className="section-heading">
            <p className="eyebrow">EDUCATION & EXPERIENCE</p>
            <h2>My learning journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-year">CURRENT</p>
                <h3>Master of Computer Applications</h3>
                <p>Jain University — Online</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-year">CURRENT</p>
                <h3>AI & Full Stack Intern</h3>
                <p>@KA Degree</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-year">COMPLETED</p>
                <h3>Bachelor of Computer Applications</h3>
                <p>BCA Graduate</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Pallavi KH.</p>
      </footer>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <Link to="/">← Back to portfolio</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <Link to="/" className="back-link">← Back to portfolio</Link>
      <p className="eyebrow">PROJECT DETAILS</p>
      <h1>{project.title}</h1>
      <p className="details-description">{project.description}</p>

      <h3>Technologies</h3>
      <div className="tech-list">
        {project.tech.map((item) => <span key={item}>{item}</span>)}
      </div>

      <div className="details-actions">
        <a className="primary-button" href={project.github} target="_blank" rel="noreferrer">
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;