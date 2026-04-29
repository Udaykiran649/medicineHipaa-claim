import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="main-header">
        <Link to="/" onClick={closeAll} className="logo-link">
          <img src={logo} alt="Revno RCM" className="site-logo" />
        </Link>

        <nav className={`nav-menu ${mobileOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeAll}>Home</NavLink>
          <NavLink to="/about-us" onClick={closeAll}>About Us</NavLink>

          <div className="service-dropdown">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="service-btn"
            >
              Our Services
              <span className={`arrow ${servicesOpen ? "open" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="dropdown-menu">
                <NavLink to="/rcm-services" onClick={closeAll}>RCM Services</NavLink>
                <NavLink to="/medical-billing" onClick={closeAll}>Medical Billing</NavLink>
                <NavLink to="/charges-entry" onClick={closeAll}>Charges Entry</NavLink>
                <NavLink to="/payment-posting" onClick={closeAll}>Payment Posting</NavLink>
                <NavLink to="/eligibility-and-benifits" onClick={closeAll}>Eligibility & Benefits Verification</NavLink>
                <NavLink to="/medical-coding" onClick={closeAll}>Medical Coding</NavLink>
                <NavLink to="/denial-management" onClick={closeAll}>Denial Management</NavLink>
                <NavLink to="/credentialing" onClick={closeAll}>Credentialing</NavLink>
                <NavLink to="/reporting" onClick={closeAll}>Reporting</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/hipaa-compliance" onClick={closeAll}>Hippa Compliance</NavLink>
          <NavLink to="/news-blogs" onClick={closeAll}>News & Blogs</NavLink>
          <NavLink to="/contact-us" onClick={closeAll}>Contact Us</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/contact-us" className="nav-btn">Free Audit</Link>
          <Link to="/contact-us" className="nav-btn">Get Started</Link>

          <button
            type="button"
            className={`hamburger-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <style>{`
        .main-header {
          width: 100%;
          min-height: 78px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          position: sticky;
          top: 0;
          z-index: 999;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .site-logo {
          height: 55px;
          object-fit: contain;
        }

        .nav-menu {
          display: flex;
          gap: 34px;
          align-items: center;
        }

        .nav-menu a,
        .service-btn {
          position: relative;
          color: #063b8f;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .nav-menu a::after,
        .service-btn::after {
          content: "";
          width: 0;
          height: 2px;
          background: #063b8f;
          position: absolute;
          left: 0;
          bottom: -6px;
          transition: 0.3s ease;
        }

        .nav-menu a:hover::after,
        .service-btn:hover::after {
          width: 100%;
        }

        .service-dropdown {
          position: relative;
        }

        .service-btn {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .arrow {
          width: 7px;
          height: 7px;
          border-right: 2px solid #063b8f;
          border-bottom: 2px solid #063b8f;
          transform: rotate(45deg);
          transition: 0.3s;
          margin-top: -3px;
        }

        .arrow.open {
          transform: rotate(-135deg);
          margin-top: 3px;
        }

        .dropdown-menu {
          position: absolute;
          top: 36px;
          left: 0;
          width: 250px;
          background: #fff;
          border: 1px solid rgba(6,59,143,.12);
          border-radius: 14px;
          padding: 10px;
          box-shadow: 0 22px 55px rgba(0,0,0,.13);
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 1000;
        }

        .dropdown-menu a {
          padding: 12px 14px;
          border-radius: 10px;
          color: #063b8f;
          text-decoration: none;
          font-weight: 700;
        }

        .dropdown-menu a:hover {
          background: #063b8f;
          color: #fff;
        }

        .dropdown-menu a::after {
          display: none;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-btn {
          border: 1.5px solid #063b8f;
          padding: 12px 24px;
          border-radius: 40px;
          color: #063b8f;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
        }

        .nav-btn:hover {
          background: #063b8f;
          color: #fff;
        }

        .hamburger-btn {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 2px solid #063b8f;
          background: #fff;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger-btn span {
          width: 23px;
          height: 2px;
          background: #063b8f;
          border-radius: 5px;
          transition: 0.3s;
        }

        .hamburger-btn.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-btn.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (max-width: 1024px) {
          .main-header {
            padding: 0 22px;
          }

          .site-logo {
            height: 52px;
          }

          .hamburger-btn {
            display: flex;
          }

          .nav-btn {
            display: none;
          }

          .nav-menu {
            position: absolute;
            top: 78px;
            left: 0;
            width: 100%;
            background: #fff;
            display: none;
            flex-direction: column;
            align-items: center;
            gap: 0;
            padding: 18px 20px 28px;
            box-shadow: 0 18px 35px rgba(0,0,0,.08);
          }

          .nav-menu.active {
            display: flex;
          }

          .nav-menu > a,
          .service-btn {
            width: 100%;
            max-width: 340px;
            text-align: center;
            justify-content: center;
            padding: 16px 10px;
            font-size: 16px;
          }

          .nav-menu a::after,
          .service-btn::after {
            display: none;
          }

          .service-dropdown {
            width: 100%;
            max-width: 340px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .dropdown-menu {
            position: static;
            width: 100%;
            margin-top: 6px;
            border-radius: 14px;
            box-shadow: 0 12px 30px rgba(0,0,0,.08);
            padding: 8px;
            background: #f8fbff;
          }

          .dropdown-menu a {
            text-align: center;
            padding: 13px 10px;
            font-size: 15px;
          }
        }

        @media (max-width: 520px) {
          .main-header {
            padding: 0 16px;
          }

          .site-logo {
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}