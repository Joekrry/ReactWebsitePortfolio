import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => 
    {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => 
        {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = 
  [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'History', href: '#history' },
  ];

  const scrollToSection = (href) => 
    {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/joseph-kerry-b6a488272/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Joekrry" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/Joekrry" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/ReactWebsitePortfolio/CV.pdf" target="_blank" rel="noopener noreferrer" className="social-link cv-link" aria-label="Download CV" download>
              <i className="fas fa-file-download"></i>
            </a>
          </div>
          
          <div className="work-status">
            <div className="status-indicator">
              <div className="pulse-circle"></div>
            </div>
            <span className="status-text">Looking for work</span>
          </div>
        </div>

        <div className="nav-center">
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => 
          (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={(e) => 
                {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
            </a>
            ))}
          </div>
        </div>

        <div className="nav-right">
          {showBackToTop && (
            <button 
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span className="back-to-top-text">Back to top!</span>
              <i className="fas fa-arrow-up"></i>
            </button>
          )}
        </div>

        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;