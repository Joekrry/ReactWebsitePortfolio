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
            MSc Software Engineering student, LLB Hons Law with Business Graduate. Currently working on my dissertation thesis and looking for professional opportunities!
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-glow"></div>
            <div className="arch-terminal">
              <div className="arch-header">
                <div className="arch-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="arch-title">joseph@arch: ~</span>
              </div>
              <div className="arch-content">
                <pre className="arch-logo">{`                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`}</pre>
                <div className="arch-info">
                  <div className="arch-info-user"><span className="arch-user">joseph</span>@<span className="arch-host">arch</span></div>
                  <div className="arch-info-divider">-----------</div>
                  <div className="arch-info-row"><span className="arch-key">OS</span>Arch Linux x86_64</div>
                  <div className="arch-info-row"><span className="arch-key">Host</span>Joseph Kerry</div>
                  <div className="arch-info-row"><span className="arch-key">Kernel</span>MSc Software Engineering</div>
                  <div className="arch-info-row"><span className="arch-key">Packages</span>C#, Python, Java, C, JS</div>
                  <div className="arch-info-colors">
                    <span style={{ background: '#1c1917' }}></span>
                    <span style={{ background: '#ef4444' }}></span>
                    <span style={{ background: '#10b981' }}></span>
                    <span style={{ background: '#f59e0b' }}></span>
                    <span style={{ background: '#1793d1' }}></span>
                    <span style={{ background: '#a855f7' }}></span>
                    <span style={{ background: '#06b6d4' }}></span>
                    <span style={{ background: '#e7e5e4' }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;