import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Joseph Kerry</span>
            <span className="hero-subtitle">West Bridgford, Nottingham, England</span>
          </h1>
          <p className="hero-description">
            Bachelor of Law with Honours Graduate, Student Master of Science in Software Engineering with a focus on C# and .NET application development.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-glow"></div>
            <div className="code-snippet">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">portfolio.cs</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">var</span> <span className="code-variable">developer</span> = {'new'} <br></br>{'{'}
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">name = </span> <span className="code-string">"Joseph Kerry"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">Languages = </span><span className="code-keyword">new</span>[] {'{'}<span className="code-variable"></span><span className="code-string">"C#"</span>, <span className="code-string">"Js"</span>, <span className="code-string">"Python"</span>{'}'}
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">YearsOfExperience = </span><span className="code-variable">2</span>;
                </div>
                <div className="code-line">{'};'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore!</span>
      </div>
    </section>
  );
};

export default Hero;