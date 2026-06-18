import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 101,
      title: "Benchmarking CNN, Hybrid and Transformer Architectures for EEG Motor Imagery Classification on OpenBCI's Galea Headset using Standardised Preprocessing Pipelines",
      source: "Dissertation",
      subtitle: "<!!! MORE INFO TO COME !!!>",
      description: "The aim of this paper is to find out what extent of reported accuracy differences between modern deep learning architectures for EEG motor imagery classification are attributable to preprocessing pipeline choices rather than architectural advances. Also, whether architectural differences persist from pipeline to pipeline, and whether different evaluation methods (LOSO and subject-specific) change the preceding answers.",
      technologies: ["Python 3.12+", "Pytorch", "MNE-Python", "EEGNet", "EEGConformer", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
      githubUrl: "",
      featured: true
    },
    {
      id: 6,
      title: "Convolutional Vision Transformer - Temporal Convolutional Network (CvT-TCN) for EEG Motor Imagery Classification",
      source: "open source",
      subtitle: "Independent CvT-TCN experiment for EEG motor imagery classification.",
      description: "Implemented a CvT using PyTorch for motor imagery classification (not for major project) on the EEGMMIDB dataset, converting raw time trials into time-frequency representations. Achieved a subject-independent accuracy on 4-class motor imagery, achieving similar results to EEGNet with an end-to-end pipeline. Visualised attention maps and convolutional filter activations to identify which EEG channel frequency bands drove predictions; findings were consistent with motor imagery neurophysiology.",
      technologies: ["Python", "PyTorch", "EEGMMIDB", "EEGNet", "Matplotlib", "Jupyter Notebooks"],
      githubUrl: "https://github.com/Joekrry/CVTTCN",
      featured: true
    },
    {
      id: -1,
      title: "ParticlePipe",
      source: "in-development",
      subtitle: "High-energy-physics data pipeline and analysis platform (LHC Run 3 simulation).",
      description: "A from-scratch Python platform that simulates and reconstructs LHC-style particle-collision events, with every physics algorithm implemented by hand — no ROOT, Pythia, or even NumPy. The domain core is built on relativistic Lorentz 4-vectors and a particle database. A reproducible Monte Carlo generator samples realistic events from a private seeded RNG: power-law pT spectra, Breit-Wigner resonance lineshapes, and isotropic two-body decays boosted from the parent rest frame into the lab, producing Z→μμ/ee, J/ψ→μμ, H→γγ, soft-QCD minimum-bias and pileup, all smeared over a realistic beam vertex. A three-level asynchronous trigger then reconstructs the physics: L1 applies fast pT/ET/MET threshold cuts, L2 computes ΔR-cone lepton isolation and dimuon-mass tags, and L3 runs a simplified Kalman track fit and rebuilds resonances from opposite-sign pairs — with L2/L3 offloaded to an executor under a bounded-concurrency semaphore. The analysis engine fills hand-rolled histograms (with Σw² Poisson errors) and fits Gaussian-on-quadratic-background peaks via χ²-minimising gradient descent, extracting signal yield and S/√(S+B) significance and recovering the Z⁰ peak near 91.19 GeV and the J/ψ near 3.097 GeV. The same core is exposed through a CLI runner and an async FastAPI REST service with Server-Sent Events streaming, all backed by a 36-test suite and an installable, configurable package.",
      technologies: ["Python 3.11+", "FastAPI", "Uvicorn", "Pydantic", "asyncio", "aiosqlite", "pytest"],
      githubUrl: ""
    },
    {
      id: 1,
      title: "Cloud Load Balancer",
      source: "in-development",
      subtitle: "Implementation and Validation of a distributred cloud load balancer with encrypted file storage.",
      description: "A Java-based distributed cloud infrastructure simulator that manages file storage across multiple Docker containers via an intelligent load balancer. Users interact with the system through a JavaFX GUI to upload, download, share, and manage files. Files are encrypted, chunked, and distributed across four file-server containers. A load balancer employs scheduling algorithms (FCFS, Round Robin, Priority Scheduling) to distribute requests, while an MQTT-based host manager dynamically scales containers based on demand. The system uses dual databases — a local SQLite instance for offline resilience and a remote MySQL container for centralised storage — with synchronisation and conflict resolution between them. A Jenkins CI/CD pipeline and a self-hosted Git server round out the infrastructure.",
      technologies: ["Java20+", "JavaFX", "Apache Maven", "Docker", "Eclipse Mosquitto (MQTT)", "SQLite", "MySQL8", "Jenkins"],
      githubUrl: "https://github.com/Joekrry/DistributedCloudLoadBalancer"
    },
    {
      id: 3,
      title: "CoverLetterGenerator",
      source: "open source",
      subtitle: "AI-powered cover letter tool.",
      description: "A web application that generates tailored cover letters using AI, based on user inputted job descriptions and personal details. Built with a React frontend and GoLang backend, integrating OpenAI's API for content generation. The app features a user-friendly interface for inputting job and personal information, and provides options to download the generated cover letter in various formats. Postman was used for API testing and development. This project is for personal use only and is not intended for commercial distribution.",
      technologies: ["JavaScript", "React", "GoLang", "OpenAI API", "Postman"],
      githubUrl: "https://github.com/Joekrry/CoverLetterGenerator"
    },
  ];

  const miniProjects = [
    {
      title: "GeometryWars2D",
      technologies: ["C#", "Xna Framework", "Monogame"],
      githubUrl: "https://github.com/Joekrry/Geometry-Wars-2D-Remake-in-Xna"
    },
    {
      title: "TextEditor",
      technologies: ["C#", ".NET 8", "Console Application"],
      githubUrl: "https://github.com/Joekrry/TextEditor"
    },
    {
      title: "MrMandelbrot",
      technologies: ["C", "SDL2"],
      githubUrl: "https://github.com/Joekrry/MrMandelbrot"
    },
  ];

  // Work out how much room is left in the last row of the 6-column grid so the
  // "Other Projects" card can fill a 1/3 (span 2) or 1/2 (span 3) gap, etc.
  // If the last row is already full, fall back to a full-width card.
  const columnSpan = (project) => {
    if (project.featured) return 3; // half row
    if (project.id > 100) return 6; // full row
    if (project.id < 0) return 4;   // two-thirds row
    return 2;                       // one-third row
  };

  const usedInLastRow = projects.reduce((col, project) => {
    const span = columnSpan(project);
    return (col + span > 6 ? span : col + span) % 6;
  }, 0);

  const leftover = usedInLastRow === 0 ? 6 : 6 - usedInLastRow;
  const fillClass =
    { 2: '', 3: 'project-card-half', 4: 'project-card-wide' }[leftover] ?? 'project-card-full';

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Projects with details and GitHub repository access.
          </p>
        </div>

        <div className="all-projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${
                  project.featured ? 'project-card-half' :
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

            {/* Smaller projects — a list card, always rendered last */}
            <div
              className={['project-card', fillClass, 'mini-projects-card'].filter(Boolean).join(' ')}
              style={{ animationDelay: `${projects.length * 0.1}s` }}
            >
              <div className="card-header">
                <h3 className="card-title">Other Projects and Coding</h3>
                <span className="source-badge misc">misc</span>
              </div>
              <div className="mini-projects-body">
                <ul className="mini-projects-list">
                  {miniProjects.map((mini) => (
                    <li key={mini.title} className="mini-project-row">
                      <span className="mini-project-title">{mini.title}</span>
                      <div className="mini-project-tech">
                        {mini.technologies.map((tech, i) => {
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
                        href={mini.githubUrl}
                        className="action-btn github-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${mini.title} on GitHub`}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;