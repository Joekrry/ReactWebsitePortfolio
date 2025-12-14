
import './TechStack.css';

const technologies = [
  { name: "C#", description: "General purpose programming language", icon: "fa-solid fa-c" },
  { name: ".NET Core", description: "Cross-platform framework for building applications", icon: "fa-solid fa-network-wired" },
  { name: "C", description: "Server-side programming language", icon: "fa-solid fa-c" },
  { name: "JavaScipt", description: "ES6+ modern JavaScript development", icon: "fa-brands fa-js" },
  { name: "Java", description: "General purpose programming language", icon: "fa-brands fa-java" },
  { name: "HTML", description: "Markup language for creating web pages", icon: "fa-brands fa-html5" },
  { name: "CSS", description: "Advanced styling with animations and responsiveness", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", description: "ES6+ modern JavaScript development", icon: "fa-brands fa-js" },
  { name: "React", description: "Component-based UI library for building web applications", icon: "fa-brands fa-react" },
  { name: "Node.js", description: "JavaScript runtime for server-side development", icon: "fa-brands fa-node-js" },
  { name: "MySQL", description: "Relational database management system", icon: "fa-solid fa-database" },
  { name: "MongoDB", description: "NoSQL database for flexible data storage", icon: "fa-solid fa-database" },
  { name: "RESTful API's", description: "Information exchange interface", icon: "fa-solid fa-code" },
  { name: "Git", description: "Version control and collaborative development", icon: "fa-brands fa-git-alt" },
  { name: "Figma", description: "UI/UX design and prototyping", icon: "fa-brands fa-figma" },
  { name: "Postman", description: "API testing and development", icon: "fa-solid fa-paper-plane" },
  { name: "VScode & Visual studio", description: "Integrated Development Environment.", icon: "fa-solid fa-computer" },
      ];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-container">
        <div className="section-header">
          <h2 className="section-title">Current technologies</h2>
          <p className="section-subtitle">
            I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
          </p>
        </div>
        <div className="tech-grid" style={{marginTop: '2rem'}}>
          {technologies.map((tech, idx) => (
            <div key={tech.name} className="tech-card" style={{animationDelay: `${idx * 0.07}s`}}>
              <i className={tech.icon}></i>
              <div className="tech-info">
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;