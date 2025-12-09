import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => 
    {
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isLawOpen, setIsLawOpen] = useState(false);
  const aboutRef = useRef(null);

  const softwareModules = 
  [
    "Advanced Software Development", "System Analysis", "System Design", "Research Methods",
    "Software Design and Development", "Software Project Management", "Mobile Systems", 
    "Final Major Project"
  ];

  const lawModules = 
  [
    "Land Law", "Applied Legal Knowledge", "Investment and Portfolio Management", "Law of Trust",
    "Corporate Governance & Risk Management", "International Law", "Criminal Law and Criminology", 
    "Tort Law", "Civil Practice & Procedure", "Financial Markets & Institutions", "Contract Law", "Business Analytics"
  ];

  useEffect(() => 
    {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSoftwareOpen(true);
          } else {
            setIsSoftwareOpen(false);
            setIsLawOpen(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) 
        {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "Sep 2025",
      title: "Enrolled in MSc Software Engineering",
      organization: "University",
      description: "Advanced studies in software engineering, including system architecture, design, planning and analysis (Modules below).",
    },
    {
      year: "Oct 2023",
      title: "Started learning to code",
      organization: "Self-taught",
      description: "Focused on web development with HTML, CSS, JavaScript, and React.",
    },
    {
      year: "Dec 2022",
      title: "Built my first computer",
      organization: "Personal Project",
      description: "Hardware assembly, system optimization, and troubleshooting.",
    },
    {
      year: "Sep 2022",
      title: "Started Bachelors Degree in Law with Business",
      organization: "University",
      description: "Research methods, critical analysis, business strategy, and UK legal system.",
    },
  ];

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem' }}>My Journey</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              From achieving an LLB Hons Law with Business degree, to pursuing a Master's in Software Engineering.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              In October 2023 I started learning to code, focusing on web development with JavaScript, React, HTML, and CSS.
              I knew I had to catch up on years of theoretical and practical knowledge to transition into a computing based career and therefore
              followed various roadmaps to build a strong fundamental understanding of theoretical computer science.
            </p>

            <div className="education-modules">
              <div className="dropdown-container">
                <button 
                  className={`dropdown-toggle ${isSoftwareOpen ? 'active' : ''}`}
                  onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
                  style={{ fontSize: '1.15rem', fontWeight: 500 }}
                >
                  <span>MSc Software Engineering Modules</span>
                  <svg className={`chevron ${isSoftwareOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
                <div className={`dropdown-content ${isSoftwareOpen ? 'open' : ''}`}>
                  <div className="module-tags">
                    {softwareModules.map((module) => (
                      <span key={module} className="module-tag" style={{ fontSize: '0.95rem' }}>{module}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dropdown-container">
                <button 
                  className={`dropdown-toggle ${isLawOpen ? 'active' : ''}`}
                  onClick={() => setIsLawOpen(!isLawOpen)}
                  style={{ fontSize: '1.15rem', fontWeight: 500 }}
                >
                  <span>LLB Hons Law with Business Modules</span>
                  <svg className={`chevron ${isLawOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
                <div className={`dropdown-content ${isLawOpen ? 'open' : ''}`}>
                  <div className="module-tags">
                    {lawModules.map((module) => (
                      <span key={module} className="module-tag" style={{ fontSize: '0.95rem' }}>{module}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-section" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Timeline</h3>
            <div className="experience-list">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className="experience-item"
                  style={{ animationDelay: `${index * 0.15}s`, display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}
                >
                  <div className="experience-marker" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#333', marginRight: '1rem', marginTop: '0.5rem' }}></div>
                  <div className="experience-content" style={{ flex: 1 }}>
                    <div className="experience-header" style={{ marginBottom: '0.5rem' }}>
                      <h4 className="company-name" style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>{item.organization}</h4>
                      <h5 className="position-title" style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{item.title}</h5>
                      <span className="period" style={{ fontSize: '1rem', color: '#666' }}>{item.year}</span>
                    </div>
                    <p className="experience-description" style={{ fontSize: '1rem', margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;