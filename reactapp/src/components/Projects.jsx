import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Masters Dissertation Thesis",
      source: "Dissertation",
      subtitle: "Assessing the Galea Headset on a Benchmark of Deep Learning Architectures and Pre-processing Pipelines for EEG Motor-Imagery Task Classification",
      description: "Motor imagery BCI's decode imagined movement from electroencephalography, despite this most published classifiers are evaluated on dense research grade montages under conditions that do not typically transfer to consumer hardware. This dissertation aims to benchmark three architectures: EEGNet, EEG-Conformer and the novel GRFNet (Galea ROCKET-Fusion Network), primarily on the sparse four channel montage of the OpenBCI Galea headset, but also the native dataset channels, under a controlled, leakage safe evaluation framework. A controlled experimental grid crosses three architectures with four preprocessing pipelines across five seeds. Using subject specific evaluation on BCI competition IV 2a and 2b with 180 cells overall. Backing this up is non parametric statistical testing utilising Holm-Bonferroni correction, confidence intervals and rank-biserial effect sizes. A cross subject-hardware transfer study tests all trained models and preprocessing pipelines on three participants recorded with the Galea headset. On the sparse montage, EEGNet leads with 0.599 on four class accuracy, while GRFNet matches EEG-Conformer at 0.566 (GRFNet containing 3655 parameters against Conformers 789,572). Heavier preprocessing displays an advantage on IV-2a whereas lighter preprocessing helps IV-2b. Restricting from 22 channels to four costs 0.099 accuracy, which presents as significant in nine of twelve cells, performance still remains above chance despite this. Cross subject-hardware transfer to galea presents chance level accuracy across every single cell - signal quality diagnostics trace this to electrode placement, material and conductivity. The key contribution establishes that dry electrode pillars on the Galea headset impose a signal quality issue based on inadequate electrode contact, conductivity and high impedance. The benchmark further demonstrates another finding that under controlled standardised conditions across preprocessing pipelines, compact decoders are able to match or exceed transformer scale models which supports the hypothesis of parameter efficient designs as the most practical path for resource constrained environments.",
      technologies: ["Python 3.11+", "PyTorch", "MNE-Python", "EEGNet", "EEG-Conformer", "GRFNet (novel)", "NumPy", "SciPy", "Scikit-learn"],
      githubUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Convolutional Vision Transformer - Temporal Convolutional Network (CvT-TCN) for EEG Motor Imagery Classification",
      source: "open source",
      subtitle: "Independent CvT-TCN experiment for EEG motor imagery classification.",
      description: "Implemented a CvT using PyTorch for motor imagery classification (not for major project) on the EEGMMIDB dataset, converting raw time trials into time-frequency representations. Achieved a subject-independent accuracy on 4-class motor imagery, achieving similar results to EEGNet with an end-to-end pipeline. Visualised attention maps and convolutional filter activations to identify which EEG channel frequency bands drove predictions; findings were consistent with motor imagery neurophysiology.",
      technologies: ["Python", "PyTorch", "EEGMMIDB", "Matplotlib", "Jupyter Notebooks"],
      githubUrl: "https://github.com/Joekrry/CVTTCN",
      featured: true
    },
    {
      id: 3,
      title: "ParticlePipe",
      source: "open source",
      subtitle: "High-energy-physics data pipeline and analysis platform (LHC Run 3 simulation).",
      description: "A from-scratch Python platform that simulates and reconstructs LHC-style particle-collision events, with every physics algorithm implemented by hand — no ROOT, Pythia, or even NumPy. The domain core is built on relativistic Lorentz 4-vectors and a particle database. A reproducible Monte Carlo generator samples realistic events from a private seeded RNG: power-law pT spectra, Breit-Wigner resonance lineshapes, and isotropic two-body decays boosted from the parent rest frame into the lab, producing Z→μμ/ee, J/ψ→μμ, H→γγ, soft-QCD minimum-bias and pileup, all smeared over a realistic beam vertex. A three-level asynchronous trigger then reconstructs the physics: L1 applies fast pT/ET/MET threshold cuts, L2 computes ΔR-cone lepton isolation and dimuon-mass tags, and L3 runs a simplified Kalman track fit and rebuilds resonances from opposite-sign pairs — with L2/L3 offloaded to an executor under a bounded-concurrency semaphore. The analysis engine fills hand-rolled histograms (with Σw² Poisson errors) and fits Gaussian-on-quadratic-background peaks via χ²-minimising gradient descent, extracting signal yield and S/√(S+B) significance and recovering the Z⁰ peak near 91.19 GeV and the J/ψ near 3.097 GeV. The same core is exposed through a CLI runner and an async FastAPI REST service with Server-Sent Events streaming, all backed by a 36-test suite and an installable, configurable package.",
      technologies: ["Python 3.11+", "FastAPI", "Uvicorn", "Pydantic", "asyncio", "aiosqlite", "pytest"],
      githubUrl: "https://github.com/Joekrry/particlepipe",
    },
    {
      id: 4,
      title: "mllhep",
      source: "open source",
      subtitle: "Machine Learning Library for High Energy Physics built in C",
      description: "A classical machine and deep learning library built in C with the purpose of being applied to my 'particlepipe' project. particlepipe generated fully labelled events and reconstructs them into machine readable results, the aim of this library is to provide me with a deeper understanding of the code equivalent of these complex machine and deep learning algorithms and to apply to particlepipe as an analysis layer in real time. High energy physics triggers operate with tight latency budgets which is exactly why a native C implementation with custom arena memory allocation delivers low and predictable inference time needed to run the model. NOT that it would ever make it past a personal project because I am one man however when I get to work on production projects, these concerns become prevalent.",
      technologies: ["C", "Arena memory allocator", "GCC", "Makefile"],
      githubUrl: "https://github.com/Joekrry/mllhep",
    },
    {
      id: 6,
      title: "Cloud Load Balancer",
      source: "open source",
      subtitle: "Implementation and Validation of a distributred cloud load balancer with encrypted file storage.",
      description: "A Java-based distributed cloud infrastructure simulator that manages file storage across multiple Docker containers via an intelligent load balancer. Users interact with the system through a JavaFX GUI to upload, download, share, and manage files. Files are encrypted, chunked, and distributed across four file-server containers. A load balancer employs scheduling algorithms (FCFS, Round Robin, Priority Scheduling) to distribute requests, while an MQTT-based host manager dynamically scales containers based on demand. The system uses dual databases — a local SQLite instance for offline resilience and a remote MySQL container for centralised storage — with synchronisation and conflict resolution between them. A Jenkins CI/CD pipeline and a self-hosted Git server round out the infrastructure.",
      technologies: ["Java20+", "JavaFX", "Apache Maven", "Docker", "Eclipse Mosquitto (MQTT)", "SQLite", "MySQL8", "Jenkins"],
      githubUrl: "https://github.com/Joekrry/DistributedCloudLoadBalancer"
    },
    {
      id: 5,
      title: "vimline-errors",
      source: "open source",
      subtitle: "An open source inline error diagnostic tool for native Vim 9.0+",
      description: "Most plugins require a linter or language server per language to identify errors. This tool is self contained, meaning it runs on the languages compiler/ interpreter in check only mode. It catches errors with support for Python, C, Cpp, JavaScript, bash, perl, and lua. Adding support for new languages is a matter of altering the config file, so it can be altered without me having to do major commits.",
      technologies: ["Vim Script 9.0+", "Compilers", "Interpreters", "+textprop", "ale"],
      githubUrl: "https://github.com/Joekrry/vimline-errors",
    }
  ];

  const miniProjects = [
    {
      title: "minimaFetch",
      technologies: ["Shell", "Arch Linux"],
      githubUrl: "https://github.com/Joekrry/minimaFetch"
    },
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
    {
      title: "CoverLetterGenerator",
      technologies: ["JavaScript", "React", "GoLang", "OpenAI API", "Postman"],
      githubUrl: "https://github.com/Joekrry/CoverLetterGenerator"
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
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      className="action-btn github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  ) : (
                    <span
                      className="action-btn github-btn github-btn-disabled"
                      aria-disabled="true"
                      aria-label={`${project.title} — no repository available`}
                    >
                      <i className="fab fa-github"></i>
                    </span>
                  )}
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