import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isHome && !scrolled ? 'transparent' : 'scrolled'}`}>
      <div className="header-top">
        <div className="header-top-inner">
          <div className="header-top-left">
            <div className="header-top-item">📧 info@hipaaclaims.com</div>
            <div className="header-top-item">📞 +1 (800) 555-0199</div>
            <div className="header-top-item">📍 New York, NY</div>
          </div>
      <div className="header-top-right">
  <a className="social-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
  <a className="social-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
  <a className="social-icon" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
</div>
        </div>
      </div>
      <div className="header-main">
        <div className="header-main-inner">
          <Link to="/" className="logo">
            <img src={logo} alt="HIPAA Claims" width={48} height={48} />
            <div className="logo-text">
              <span className="logo-primary">HIPAA</span>{' '}
              <span className="logo-secondary">Claims</span>
            </div>
          </Link>
          <button className="mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary nav-cta">Free Audit</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;