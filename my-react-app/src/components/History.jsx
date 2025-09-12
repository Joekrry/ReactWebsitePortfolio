import './History.css';

const History = () => {
  const timelineData = [
    {
      year: "Sep 2022",
      title: "Started Bachelors Degree in Law with Business",
      organization: "University",
      description: "Developed strong skills in Research Methods, Critical analysis, Business Strategy, Information Analysis and an in-depth understanding of the UK legal system.",
      type: "education",
    },

    {
      year: "Dec 2022",
      title: "Built my first computer",
      organization: "Personal Project",
      description: "Developed knowledge in hardware assembly, system optimization, and troubleshooting.",
      type: "skill",
      achievements: [
        "Assembled high-performance PC",
        "Optimized for gaming and development",
        "Troubleshot hardware issues"
      ]
    },
    {
      year: "Oct 2023",
      title: "Started learning to code",
      organization: "Self-taught",
      description: "Began my journey into programming with a focus on web development, learning HTML, CSS, JavaScript, and React.",
      type: "future",
      achievements: [
        "Built 5+ web projects (not deployed)",
        "Completed 100+ coding challenges on Leetcode",
        "Learned fundamental principles of coding"
      ]
    },
    {
      year: "Sep 2025",
      title: "Enrolled in MSc Software Engineering",
      organization: "University",
      description: "Pursuing advanced studies in software engineering to extensively develop my coding skills and technical knowledge, and gain a highly respected qualification.",
      type: "education",
      achievements: [
        "Advanced software engineering principles and architecture",
        "Collaborative project experience and planning",
        "In-depth understanding of software development lifecycle"
      ]
    },
  ];

  const getTypeIcon = (type) => {
    const icons = {
      education: "🎓",
      experience: "💼",
      skill: "⚡",
      future: "🚀"
    };
    return icons[type] || "📍";
  };

  const getTypeColor = (type) => {
    const colors = {
      education: "education",
      experience: "experience", 
      skill: "skill",
      future: "future"
    };
    return colors[type] || "default";
  };

  return (
    <section className="history" id="history">
      <div className="history-container">
        <div className="section-header">
          <h2 className="section-title">My Journey</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${getTypeColor(item.type)}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">{getTypeIcon(item.type)}</div>
                  <div className="marker-year">{item.year}</div>
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>{item.title}</h3>
                    <span className="organization">{item.organization}</span>
                  </div>
                  <p className="description">{item.description}</p>
                  {Array.isArray(item.achievements) && (
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;