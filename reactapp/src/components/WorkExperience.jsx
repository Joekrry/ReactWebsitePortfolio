import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Sub-contracting for various clients",
      position: "Systems Developer (part-time)",
      location: "Remote",
      startDate: "Feb 2026",
      endDate: "Present",
      responsibilities: [
        "Creating and consulting documentation and requirements to develop software solutions for clients.",
        "Developing systems from a user perspective to ensure usability and functionality.",
      ]
    },
  ];

  return (
    <section className="work-experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="experience-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-position">{exp.position}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-dates">
                    {exp.startDate} - {exp.endDate}
                  </span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
