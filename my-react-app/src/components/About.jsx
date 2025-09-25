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

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3>My Journey</h3>
            <p>
              A fresh graduate in possession of a Bachelors degree, with honours, in Law with Business, Now pursuing a Master's degree in Software Engineering
                to transition into a career in software development. I realised half way through my bachelors that a career in law was not for me,
                I have always been interested in both software and hardware but unfortunately never pursued it academically.
            </p>
            <p>
              In October 2023, I started teaching myself front-end web development using HTML, CSS and JavaScript and becoming familiar with frameworks and tools such as
              React, Git, and figma for UI/UX planning. As I was enrolled in my bachelors degree I did not spend as much time on learning these skills as I would have liked.
              However, Now that I have graduated and have started my masters degree in Software Engineering, I can spend infinitely more time learning and practising these skills,
              I am extremely excited to have valuable academic guidance to structure my learning and provide an insightful network.
            </p>
          </div>

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
                    <span key={module} className="module-tag">{module}</span>
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
                    <span key={module} className="module-tag">{module}</span>
                  ))}
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