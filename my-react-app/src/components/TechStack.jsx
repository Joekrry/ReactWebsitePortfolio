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
        { name: "HTML", description: "Markup language for creating web pages" },
        { name: "CSS", description: "Advanced styling with animations and responsiveness" },
        { name: "JavaScript", description: "ES6+ modern JavaScript development" },
        { name: "React", description: "Component-based UI library for building web applications" },
        { name: "Anime.js", description: "JavaScript animation library" },
      ]
    },
    backend: 
    {
      title: "Backend Development",
      description: "Building server-side applications and APIs",
      technologies: [
        { name: "C#", description: "General purpose programming language" },
        { name: ".NET Core", description: "Cross-platform framework for building applications" },
        { name: "C", description: "Server-side programming language" },
        { name: "Java", description: "General purpose programming language" },
        { name: "Node.js", description: "JavaScript runtime for server-side development" },
        { name: "JavaScipt", description: "ES6+ modern JavaScript development" },
        /*{ name: "PostgreSQL", description: "Relational database management system" },
        { name: "MongoDB", description: "NoSQL database for flexible data storage" },
        { name: "RESTful API's", description: "Information exchange interface" },*/
      ]
    },
    tools: 
    {
      title: "Development Tools",
      description: "Essential tools for efficient development workflow",
      technologies: 
      [
        { name: "Git", description: "Version control and collaborative development" },
        { name: "Figma", description: "UI/UX design and prototyping" },
        { name: "Postman", description: "API testing and development" },
        { name: "Visual Studio Code", description: "Integrated Development Environment." },
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