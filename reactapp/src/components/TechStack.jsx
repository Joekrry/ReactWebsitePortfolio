import { useState } from 'react';
import './TechStack.css';

const TechStack = () => 
    {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techStack = 
  {
    frontend: 
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces",
      technologies: [
        { name: "HTML", description: "Markup language for creating web pages", icon: "fa-brands fa-html5" },
        { name: "CSS", description: "Advanced styling with animations and responsiveness", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", description: "ES6+ modern JavaScript development", icon: "fa-brands fa-js" },
        { name: "React", description: "Component-based UI library for building web applications", icon: "fa-brands fa-react" },
        { name: "Anime.js", description: "JavaScript animation library", icon: "fa-solid fa-a" },
      ]
    },
    backend: 
    {
      title: "Backend Development",
      description: "Building server-side applications and APIs",
      technologies: [
        { name: "C#", description: "General purpose programming language", icon: "fa-solid fa-c" },
        { name: ".NET Core", description: "Cross-platform framework for building applications", icon: "fa-solid fa-network-wired" },
        { name: "C", description: "Server-side programming language", icon: "fa-solid fa-c" },
        { name: "Java", description: "General purpose programming language", icon: "fa-brands fa-java" },
        { name: "Node.js", description: "JavaScript runtime for server-side development", icon: "fa-brands fa-node-js" },
        { name: "JavaScipt", description: "ES6+ modern JavaScript development", icon: "fa-brands fa-js" },
        { name: "PostgreSQL", description: "Relational database management system", icon: "fa-solid fa-database" },
        { name: "MongoDB", description: "NoSQL database for flexible data storage", icon: "fa-solid fa-database" },
        { name: "RESTful API's", description: "Information exchange interface", icon: "fa-solid fa-code" },
      ]
    },
    tools: 
    {
      title: "Development Tools",
      description: "Essential tools for efficient development workflow",
      technologies: 
      [
        { name: "Git", description: "Version control and collaborative development", icon: "fa-brands fa-git-alt" },
        { name: "Figma", description: "UI/UX design and prototyping", icon: "fa-brands fa-figma" },
        { name: "Postman", description: "API testing and development", icon: "fa-solid fa-paper-plane" },
        { name: "VScode & Visual studio", description: "Integrated Development Environment.", icon: "fa-solid fa-computer" },
      ]
    }
  };
  const categories = Object.keys(techStack);

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-container">
        <div className="section-header">
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            What I'm working with
          </p>
        </div>

        <div className="tech-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {techStack[category].title}
            </button>
          ))}
        </div>

        <div className="tech-content">
          <div className="tech-header">
            <h3>{techStack[activeCategory].title}</h3>
            <p>{techStack[activeCategory].description}</p>
          </div>

          <div className="tech-grid">
            {techStack[activeCategory].technologies.map((tech, index) => (
              <div key={tech.name} className="tech-card" style={{animationDelay: `${index * 0.1}s`}}>
                <i className={tech.icon}></i>
                <div className="tech-info">
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;