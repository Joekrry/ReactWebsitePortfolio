import './Projects.css'; 
import GeoWars from '../assets/GeometryWars.jpg';
import SoftwareProgrammingImage from '../assets/SoftwareProgrammingImage.jpg';
import Calculator1 from '../assets/Calculator1.png';

const Projects = () => 
    {
  const projects = [
    {
      id: 1,
      title: "Geometry Wars 2D Remake in Xna Framework to learn a more practical demonstration of C#.",
      category: "full-stack",
      description: "A personalised remake of the classic Geometry Wars game. Learning the basics of C# syntax.",
      technologies: ["C#", "Xna Framework", "Monogame"],
      image: GeoWars,
      githubUrl: "https://github.com/Joekrry/Geometry-Wars-2D-Remake-in-Xna"
    },
    {
      id: 2,
      title: "Basic mini Projects from my 'Software Programming' Module.",
      category: "front-end",
      description: "Mini projects from my 'Software Programming' module at university. These projects were created using C# and focused on various programming concepts and techniques.",
      technologies: ["C#"],
      image: SoftwareProgrammingImage,
      githubUrl: "https://olympus.ntu.ac.uk/N1077433?tab=repositories"
    },
    {
      id: 3,
      title: "easyCalculator",
      category: "back-end",
      description: "A simple calculator console application built with the purpose of practicing real time console display updating and referencing.",
      technologies: ["C#"],
      image: Calculator1,
      githubUrl: "https://github.com/Joekrry/easyCalculator"
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