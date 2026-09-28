import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-number">0{project.id}</div>

      <div className="project-content">
        <p className="project-label">PROJECT</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-list">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <Link to={`/projects/${project.id}`}>View details →</Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;