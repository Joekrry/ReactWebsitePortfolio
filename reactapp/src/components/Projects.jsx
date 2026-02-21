import './Projects.css';
import GeoWarsVideo from '../assets/V1.0.0-GeometryWars.mp4';
import CoverLetterVideo from '../assets/V1.0.1-CoverLetterGenerator.mp4';
import TextEditorVideo from '../assets/V1.0.0-TextEditor.mp4';
import FlashcardsVideo from '../assets/V1.0.0-FlashCards.mp4';

const Projects = () => {
  const projects = [
    {
      id: -1,
      title: "Biosignal Data Processing Framework",
      source: "in-development",
      subtitle: "Toolkit for cleaning, harmonising and exporting biosignal data.",
      description: "Python based framework with the goal of streamlining the processing and cleaning of biosignal data -- specifically EEG and PPG data. Modular components are developed for cleaning, diagnostics, harmonisation, validation and exporting the data. the framework currently uses CLI but in an ideal real world application would have a comprehensive GUI.",
      technologies: ["Python 3.12+", "NumPy", "Pandas", "PyTest", "Matplotlib", "PyQt5"],
      video: null,
      githubUrl: ""
    },
    {
      id: 1,
      title: "GeometryWars2D",
      source: "closed source",
      subtitle: "2D arcade shooter remake.",
      description: "A personalised remake of the classic Geometry Wars game. Learning the basics of C# syntax. Utilizing the Xna Framework and Monogame to develop a 2D arcade-style shooter game.",
      technologies: ["C#", "Xna Framework", "Monogame"],
      video: GeoWarsVideo,
      githubUrl: "https://github.com/Joekrry/Geometry-Wars-2D-Remake-in-Xna"
    },
    {
      id: 2,
      title: "CoverLetterGenerator",
      source: "closed source",
      subtitle: "AI-powered cover letter tool.",
      description: "A web application that generates tailored cover letters using AI, based on user inputted job descriptions and personal details. Built with a React frontend and GoLang backend, integrating OpenAI's API for content generation.",
      technologies: ["JavaScript", "React", "GoLang", "OpenAI API", "Postman"],
      video: CoverLetterVideo,
      githubUrl: "https://github.com/Joekrry/CoverLetterGenerator"
    },
    {
      id: 3,
      title: "TextEditor",
      source: "closed source",
      subtitle: "Console-based text editor for .NET 8.",
      description: "Advanced Text Editor for .NET 8 with file loading, saving, undo/redo, search, insert and command modes, keyboard shortcuts, and robust error handling, designed for efficient console-based text editing.",
      technologies: ["C#", ".NET 8", "Console Application"],
      video: TextEditorVideo,
      githubUrl: "https://github.com/Joekrry/TextEditor"
    },
    {
      id: 4,
      title: "Flashcards App",
      source: "closed source (personal use)",
      subtitle: "Self-hosted flashcard revision tool.",
      description: "I didn't want to pay for Quizlet but wanted to use flashcards for revision. Built the frontend with React and connected the backend to a locally hosted SQLite database to store flashcard sets, folders, username, and password.",
      technologies: ["JavaScript", "React", "SQLite", "Node.js"],
      video: FlashcardsVideo,
      githubUrl: "https://github.com/Joekrry/flashcards"
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Project video previews with details and GitHub repository access.
          </p>
        </div>

        <div className="all-projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.id < 0 ? 'project-card-wide' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card header: title + source badge */}
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span className={`source-badge ${
                    project.source === 'open source' ? 'open' :
                    project.source === 'in-development' ? 'dev' : 'closed'
                  }`}>{project.source}</span>
                </div>

                {/* Media */}
                <div className="project-image">
                  {project.video ? (
                    <video
                      src={project.video}
                      loop
                      muted
                      autoPlay
                      playsInline
                      className="project-video"
                    />
                  ) : (
                    project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#faf8f6', fontWeight: 600, fontSize: '1.1rem', background: '#222', minHeight: '220px'}}>
                        No video preview available
                      </div>
                    )
                  )}
                </div>

                {/* Card body */}
                <div className="card-body">
                  <p className="card-subtitle">{project.subtitle}</p>
                  <p className="card-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => {
                      // Generate a pastel color for each tech tag
                      let hue = Math.floor(Math.random() * 360) - 20;
                      if (hue < 0) hue += 360;
                      const pastelColor = `hsl(${hue}, 70%, 85%)`;
                      return (
                        <span
                          key={i}
                          className="tech-tag"
                          style={{ background: pastelColor, color: '#222', borderColor: pastelColor }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;