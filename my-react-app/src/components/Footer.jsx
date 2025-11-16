import './Footer.css';

const Footer = () => 
    {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">My React Portfolio</h3>
            <p className="footer-description">
              Learning the React Framework to optimise my Front-End development skills.
            </p>
          </div>
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p>Available for freelance projects and full-time opportunities</p>
              <a href="mailto:Joerkerry@gmail.com" className="contact-email">
                Joerkerry@gmail.com
              </a>
            </div>
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