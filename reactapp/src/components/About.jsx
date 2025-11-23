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
              In October 2023, I started teaching myself front-end web development involving HTML, CSS and JavaScript and becoming familiar with frameworks and tools such as
              React, Git, and figma for UI/UX planning. I immediately enjoyed the process of building code based projects and learning the intricacies of the theory surrounding code
              and computer science as a broader subject. However, without formal education and structured learning through an institution, I could not see myself entering into the industry and
              therefore planned to pursue further education in the field.
            </p>
            <p>
              After completing my Bachelor's degree in Law with Business at Nottingham Trent University in June 2025, I decided to pursue a Master of Science in Software Engineering.
              This decision was driven by my fixation on technology from a young age, and my desire for objective solutions to problems i would be facing, which i found was not common within law and this made it difficult for me
              to continue to be motivated to work within that field.
            </p>
            <p>
              In preparation for my Masters degree, I have been proactively learning C# and .NET through online courses and practical projects. This self-initiated learning has provided me with a solid foundation in these technologies
              which can then be built upon during my course.
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