
import './TechStack.css';

const technologies = [
  { name: "C#", icon: "fa-solid fa-c" },
  { name: ".NET Core", icon: "fa-solid fa-network-wired" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "C", icon: "fa-solid fa-c" },
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Node.js", icon: "fa-brands fa-node-js" },
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "RESTful API's", icon: "fa-solid fa-code" },
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "Postman", icon: "fa-solid fa-paper-plane" },
  { name: "VScode & Visual studio", icon: "fa-solid fa-computer" },
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;