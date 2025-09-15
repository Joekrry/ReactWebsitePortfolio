import './Projects.css'; 
import PS2EMULATOR from '../assets/PS2EMULATOR.jpg';
import GeoWars from '../assets/GeometryWars.jpg';
import MyFirstWebsite from '../assets/MyFirstWebsite.png';

const Projects = () => 
    {
  const projects = [
    {
      id: 1,
      title: "PS2 Emulator Framework",
      category: "full-stack",
      description: "A PS2 Emulator Framework built in C# with basic hardware emulation, a custom UI, Long term Project as I lack the sufficient knowledge for in depth hardware emulation.",
      technologies: ["C#", ".NET",],
      image: PS2EMULATOR,
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Geometry Wars Remastered",
      category: "full-stack",
      description: "A personalised remake of the classic Geometry Wars game. Learning the basics of C# syntax.",
      technologies: ["C#", "Xna Framework", "Monogame"],
      image: GeoWars,
      githubUrl: "#"
    },

        {
      id: 3,
      title: "First Portfolio Website",
      category: "front-end",
      description: "A modern remake of the classic Geometry Wars game with gameplay and graphics optimised for me personally.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: MyFirstWebsite,
      githubUrl: "https://github.com/Joekrry/PortfolioWebsite"
    },

  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A continuously developing portfolio of projects showcasing my skills in full-stack development, frontend design, and backend architecture.
          </p>
        </div>

        {/* All Projects */}
        <div className="all-projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a href={project.githubUrl} className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;