
import './TechStack.css';

const technologies = [
  { name: "C#", icon: "fa-solid fa-c", confidence: "My main coding language" },
  { name: ".NET Core", icon: "fa-solid fa-network-wired", confidence: "Most confident within this framework" },
  { name: "JavaScript", icon: "fa-brands fa-js", confidence: "comfortable using this language for a wide array of applications" },
  { name: "C", icon: "fa-solid fa-c", confidence: "I understand this language as a subset of C# and can develop applications using this." },
  { name: "Java", icon: "fa-brands fa-java", confidence: "I understand this language as a subset of C# and can develop applications using this." },
  { name: "HTML", icon: "fa-brands fa-html5", confidence: "Confident in my understanding of this" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", confidence: "Confident in my understanding of this" },
  { name: "React", icon: "fa-brands fa-react", confidence: "Intermediate abilities working within this framework, only experienced with simple functions" },
  { name: "Node.js", icon: "fa-brands fa-node-js", confidence: "Intermediate abilities working within this environment, only experienced with simple functions such as npm" },
  { name: "MySQL", icon: "fa-solid fa-database", confidence: "Currently learning so as to be able to develop database-driven applications" },
  { name: "RESTful API's", icon: "fa-solid fa-code", confidence: "Currently learning so as to be able to develop personal use cases for APIs" },
  { name: "Git", icon: "fa-brands fa-git-alt", confidence: "confident with version control and collaboration" },
  { name: "Postman", icon: "fa-solid fa-paper-plane", confidence: "Currently learning so as to be able to develop personal use cases for APIs" },
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-container">
        <div className="section-header">
          <h2 className="section-title">Current technologies</h2>
        </div>
        <div className="tech-grid" style={{marginTop: '2rem'}}>
          {technologies.map((tech, idx) => (
            <div key={tech.name} className="tech-card" style={{animationDelay: `${idx * 0.07}s`}}>
              <i className={tech.icon}></i>
              <div className="tech-info">
                <h4>{tech.name}</h4>
                <p>{tech.confidence}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;