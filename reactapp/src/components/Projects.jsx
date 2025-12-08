import './Projects.css'; 
import { useEffect, useRef } from 'react';
import GeoWars from '../assets/GeometryWars.jpg';
import GeoWarsVideo from '../assets/V1.0.0-GeometryWars.mp4';
import CoverLetterVideo from '../assets/V1.0.0-CoverLetterGenerator.mp4';

const Projects = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(err => console.log('Video play error:', err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    const currentVideoRefs = videoRefs.current.filter(Boolean);
    currentVideoRefs.forEach((video) => observer.observe(video));

    return () => currentVideoRefs.forEach((video) => observer.unobserve(video));
  }, []);

  const projects = [
    {
      id: 1,
      title: "GeometryWars2D",
      category: "full-stack",
      description: "A personalised remake of the classic Geometry Wars game. Learning the basics of C# syntax. Utilizing the Xna Framework and Monogame to develop a 2D arcade-style shooter game.",
      technologies: ["C#", "Xna Framework", "Monogame"],
      image: GeoWars,
      video: GeoWarsVideo,
      githubUrl: "https://github.com/Joekrry/Geometry-Wars-2D-Remake-in-Xna"
    },
    {
      id: 2,
      title: "CoverLetterGenerator",
      category: "full-stack",
      description: "A web application that generates tailored cover letters using AI, based on user inputted job descriptions and personal details. Built with a React frontend and GoLang backend, integrating OpenAI's API for content generation.",
      technologies: ["React", "GoLang"],
      image: GeoWars,
      video: CoverLetterVideo,
      githubUrl: "https://github.com/Joekrry/CoverLetterGenerator"
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Hover over each project for clarity and click the GitHub icon to view the code!
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
                  {project.video ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={project.video}
                      loop
                      muted
                      autoPlay
                      playsInline
                      className="project-video"
                    />
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  <div className="project-overlay">
                    <div className="overlay-header">
                      <h3 className="overlay-title">{project.title}</h3>
                      <div className="project-tech">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>
                    <div className="project-actions">
                      <a 
                        href={project.githubUrl} 
                        className="action-btn github-btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
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