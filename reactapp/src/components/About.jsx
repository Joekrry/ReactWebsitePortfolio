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
    { name: "Mobile Systems (Mid-Commendation) :/", grade: "mid-commendation" },
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
              I'm a prolific gamer, I also do indoor bouldering, play both the acoustic and electric guitar and I love travelling with my girlfriend.
              I'm a huge fan of learning and I love a challenge that make me feel like I have no idea what I'm doing!
            </p>
            <p className="about-text">
              I did my Bachelors degree in Law with Business, I realised around the middle of my second year that I didn't want to pursue a career in law.
              I started learning to code and learning theoretical and practical knowledge to transition into a computing based career and therefore followed 
              various roadmaps and courses to build a strong fundamental understanding of theoretical computer science and syntactical coding knowledge.

            </p>
            <p className="about-text">
              In September 2025, I enrolled in MSc Software Engineering to gain formal qualifications and a structured learning environment to not only 
              learn more advanced practical coding, but also system architecture, design, planning and analysis. Below are the modules I am undertaking 
              as part of this degree, alongside the modules from my undergraduate degree.
            </p>

            <p className ="about-text">
              As of April 2026, I am starting my dissertation project which involves a software project plan, a literature review and a dissertation paper
              alongside the development of my dissertation project.
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