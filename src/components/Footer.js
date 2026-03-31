import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="logo">
              <img src={logo} alt="HIPAA Claims" width={48} height={48} />
              <div className="logo-text">
                <span className="logo-primary">HIPAA</span>{' '}
                <span className="logo-secondary">Claims</span>
              </div>
            </Link>
            <p>
              HIPAA Claims is a trusted medical billing and revenue cycle management partner,
              dedicated to helping healthcare providers maximize revenue while ensuring full compliance.
            </p>
           <div className="footer-social">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
</div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Medical Billing</Link></li>
              <li><Link to="/services">Claims Processing</Link></li>
              <li><Link to="/services">Denial Management</Link></li>
              <li><Link to="/services">Credentialing</Link></li>
              <li><Link to="/services">AR Management</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <span className="icon">📍</span>
              <span>123 Healthcare Ave, Suite 500, New York, NY 10001</span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📞</span>
              <span>+1 (800) 555-0199</span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📧</span>
              <span>info@hipaaclaims.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">🕐</span>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HIPAA Claims. All Rights Reserved. | HIPAA Compliant Medical Billing Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;