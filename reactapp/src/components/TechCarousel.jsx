import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './TechCarousel.css';

const TechCarousel = () => {
  const itemsRef = useRef([]);
  
  const technologies = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'C', icon: 'fas fa-code' }
  ];

  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validItems = itemsRef.current.filter(item => item !== null);
      
      gsap.set(validItems, {
        opacity: 0,
        scale: 0,
      });
      
      gsap.to(validItems, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="tech-stack-carousel">
      <h2 className="carousel-title">What I work with</h2>
      <div className="carousel-container">
        <div className="tech-stack-track">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-item"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <i className={tech.icon}></i>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;
