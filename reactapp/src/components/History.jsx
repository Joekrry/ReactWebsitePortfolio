import './History.css';

const History = () => {
  const timelineData = [
    {
      year: "Sep 2025",
      title: "Enrolled in MSc Software Engineering",
      organization: "- University",
      description: "Advanced studies in software engineering, including system architecture, design, planning and analysis (Modules above).",
    },
    {
      year: "Oct 2023",
      title: "Started learning to code",
      organization: "- Self-taught",
      description: "Focused on web development with HTML, CSS, JavaScript, and React.",
    },
    {
      year: "Dec 2022",
      title: "Built my first computer",
      organization: "- Personal Project",
      description: "Hardware assembly, system optimization, and troubleshooting.",
    },
    {
      year: "Sep 2022",
      title: "Started Bachelors Degree in Law with Business",
      organization: "- University",
      description: "Research methods, critical analysis, business strategy, and UK legal system.",
    },
  ];

  return (
    <section className="history" id="history">
      <div className="history-container">
        <div className="section-header">
          <h2 className="section-title">My Journey</h2>
        </div>

        <div className="experience-list">
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className="experience-item"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="company-name">{item.organization}</h3>
                  <h4 className="position-title">{item.title}</h4>
                  <span className="period">{item.year}</span>
                </div>
                <p className="experience-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;