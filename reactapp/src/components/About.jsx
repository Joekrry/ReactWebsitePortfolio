import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => 
    {
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isLawOpen, setIsLawOpen] = useState(false);
  const aboutRef = useRef(null);

  const softwareModules = 
  [
    { name: "Advanced Software Development (High-Distinction)", grade: "high-distinction" },
    { name: "System Analysis and Design (High-Commendation)", grade: "high-commendation" },
    { name: "Software Project Management (Low-Distinction)", grade: "low-distinction" },
    { name: "Mobile Systems", grade: "" },
    { name: "Research Methods", grade: "" },
    { name: "Software Design and Development", grade: "" },
    { name: "Final Major Project", grade: "" }
  ];

  const lawModules = 
  [
    { name: "Land Law", grade: "" },
    { name: "Applied Legal Knowledge", grade: "" },
    { name: "Investment and Portfolio Management", grade: "" },
    { name: "Law of Trust", grade: "" },
    { name: "Corporate Governance & Risk Management", grade: "" },
    { name: "International Law", grade: "" },
    { name: "Criminal Law and Criminology", grade: "" },
    { name: "Tort Law", grade: "" },
    { name: "Civil Practice & Procedure", grade: "" },
    { name: "Financial Markets & Institutions", grade: "" },
    { name: "Contract Law", grade: "" },
    { name: "Business Analytics", grade: "" }
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

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-story">
            <p className="about-intro">
              From achieving an LLB Hons Law with Business degree, to pursuing a Master's in Software Engineering.
            </p>
            <p className="about-text">
              In October 2023 I started learning to code, focusing on web development with JavaScript, React, HTML, and CSS.
              I knew I had to catch up on years of theoretical and practical knowledge to transition into a computing based career and therefore
              followed various roadmaps and courses to build a strong fundamental understanding of theoretical computer science and syntactical coding knowledge.
            </p>
            <p className="about-text">
              In September 2025, I enrolled in MSc Software Engineering to gain formal qualifications and a structured learning environment to not only learn more advanced practical coding,
              but also system architecture, design, planning and analysis. Below are the modules I am undertaking as part of this degree, alongside the modules from my undergraduate degree.
            </p>
            <div className="education-modules">
              <div className="dropdown-container">
                <button 
                  className={`dropdown-toggle ${isSoftwareOpen ? 'active' : ''}`}
                  onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
                >
                  <span>MSc Software Engineering Modules</span>
                  <svg className={`chevron ${isSoftwareOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
                <div className={`dropdown-content ${isSoftwareOpen ? 'open' : ''}`}>
                  <div className="module-tags">
                    {softwareModules.map((module) => (
                      <span 
                        key={module.name} 
                        className={`module-tag ${module.grade || ''}`}
                      >
                        {module.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dropdown-container">
                <button 
                  className={`dropdown-toggle ${isLawOpen ? 'active' : ''}`}
                  onClick={() => setIsLawOpen(!isLawOpen)}
                >
                  <span>LLB Hons Law with Business Modules</span>
                  <svg className={`chevron ${isLawOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
                <div className={`dropdown-content ${isLawOpen ? 'open' : ''}`}>
                  <div className="module-tags">
                    {lawModules.map((module) => (
                      <span 
                        key={module.name} 
                        className={`module-tag ${module.grade || ''}`}
                      >
                        {module.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;