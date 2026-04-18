import './Projects.css';
import GeoWarsVideo from '../assets/V1.0.0-GeometryWars.mp4';
import CoverLetterVideo from '../assets/V1.0.1-CoverLetterGenerator.mp4';
import TextEditorVideo from '../assets/V1.0.0-TextEditor.mp4';
import FlashcardsVideo from '../assets/V1.0.0-FlashCards.mp4';
import MrMandelbrot from '../assets/V1.0.0-MrMandelbrot.mp4';

const Projects = () => {
  const projects = [
    {
      id: 101,
      title: "Applying Deep Learning to EEG Biosignal Data for Task Classification in Brain-Computer Interfaces",
      source: "Dissertation",
      subtitle: "<!!! MORE INFO TO COME !!!>",
      description: "Dissertation project to apply deep learning techniques to EEG biosignal data, aiming to distinguish between various tasks. Applications will regard brain-computer interfaces. <!!! MORE INFO TO COME !!!> ",
      technologies: ["Python 3.12+", "Pytorch", "MNE-Python", "EEGNet", "torcheeg", "pyEDFlib", "MOABB"],
      video: null,
      githubUrl: ""
    },
    {
      id: 1,
      title: "Cloud Load Balancer",
      source: "in-development",
      subtitle: "Implementation and Validation of a distributred cloud load balancer with encrypted file storage.",
      description: "A Java-based distributed cloud infrastructure simulator that manages file storage across multiple Docker containers via an intelligent load balancer. Users interact with the system through a JavaFX GUI to upload, download, share, and manage files. Files are encrypted, chunked, and distributed across four file-server containers. A load balancer employs scheduling algorithms (FCFS, Round Robin, Priority Scheduling) to distribute requests, while an MQTT-based host manager dynamically scales containers based on demand. The system uses dual databases — a local SQLite instance for offline resilience and a remote MySQL container for centralised storage — with synchronisation and conflict resolution between them. A Jenkins CI/CD pipeline and a self-hosted Git server round out the infrastructure.",
      technologies: ["Java20+", "JavaFX", "Apache Maven", "Docker", "Eclipse Mosquitto (MQTT)", "SQLite", "MySQL8", "Jenkins"],
      video: null,
      githubUrl: ""
    },
    {
      id: 2,
      title: "GeometryWars2D",
      source: "open source",
      subtitle: "2D arcade shooter remake.",
      description: "A personalised remake of the classic Geometry Wars game in the Xna framework (ancient). I resent any sort of graphical creation process for video games so basic geometry rendering was the way to go. Built with C# and the Xna Framework for graphics rendering. Added gamepad input management to challenge myself.",
      technologies: ["C#", "Xna Framework", "Monogame"],
      video: GeoWarsVideo,
      githubUrl: "https://github.com/Joekrry/Geometry-Wars-2D-Remake-in-Xna"
    },
    {
      id: 3,
      title: "CoverLetterGenerator",
      source: "open source",
      subtitle: "AI-powered cover letter tool.",
      description: "A web application that generates tailored cover letters using AI, based on user inputted job descriptions and personal details. Built with a React frontend and GoLang backend, integrating OpenAI's API for content generation.",
      technologies: ["JavaScript", "React", "GoLang", "OpenAI API", "Postman"],
      video: CoverLetterVideo,
      githubUrl: "https://github.com/Joekrry/CoverLetterGenerator"
    },
    {
      id: 4,
      title: "TextEditor",
      source: "open source",
      subtitle: "Console-based text editor for .NET 8.",
      description: "Advanced Text Editor for .NET 8 with file loading, saving, undo/redo, search, insert and command modes, keyboard shortcuts, and robust error handling, designed for efficient console-based text editing.",
      technologies: ["C#", ".NET 8", "Console Application"],
      video: TextEditorVideo,
      githubUrl: "https://github.com/Joekrry/TextEditor"
    },
    {
      id: 5,
      title: "MrMandelbrot",
      source: "open source",
      subtitle: "Fractal exploration tool.",
      description: "A generous name for what it is to be honest. A simple tool to explore the Mandelbrot set, checks whether a point is in the bounds or not and visualises it. Built with C and SDL2 for graphics rendering.",
      technologies: ["C", "SDL2"],
      video: MrMandelbrot,
      githubUrl: "https://github.com/Joekrry/MrMandelbrot"
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
                className={`project-card ${
                  project.id > 100 ? 'project-card-full' :
                  project.id < 0 ? 'project-card-wide' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card header: title + source badge */}
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span className={`source-badge ${
                    project.source === 'Dissertation' ? 'dissertation' :
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