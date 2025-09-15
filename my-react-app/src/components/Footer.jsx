import './Footer.css';

const Footer = () => 
    {
  const currentYear = new Date().getFullYear();

  const socialLinks = 
  [
    { name: 'GitHub', url: 'https://github.com/Joekrry', icon: 'GitHub' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joseph-kerry-b6a488272/', icon: 'LinkedIn' },
    { name: 'Instagram', url: 'https://www.instagram.com/Joekrry/', icon: 'Instagram' },
  ];

  const scrollToTop = () => 
    {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">My React Portfolio</h3>
            <p className="footer-description">
              Learning the React Framework to optimise my Front-End development skills.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p>Available for freelance projects and full-time opportunities</p>
              <a href="mailto:Joerkerry@gmail.com" className="contact-email">
                Joerkerry@gmail.com
              </a>
            </div>
            <button 
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Joseph Kerry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;