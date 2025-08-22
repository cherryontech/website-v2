import React, { useState } from 'react';
import '../styles/components/header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <a href="/">
          <img src="cherry-on-tech.png" alt="Organization Logo" className="logo" />
        </a>

        <button
          className="hamburger-button"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <a href="/" className="subheading">Home</a>
            </li>
            <li>
              <a href="/about" className="subheading">About</a>
            </li>
            <li>
              <a href="/programs" className="subheading">Programs</a>
            </li>
            <li>
              <a href="/get-involved" className="subheading">Get Involved</a>
            </li>
            <li>
              <a href="/contact" className="subheading">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="desktop-button-container">
            <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7164685602104225792" target="_blank" rel="noopener noreferrer" className="btn-secondary">Subscribe for News</a>
            <a href="mailto:info@cherryontech.org" className="btn-stroke">Contact Us</a>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-container">
            <a href="/">
              <img src="cherry-on-tech.png" alt="Organization Logo" className="logo"/>
            </a>
              <nav className="mobile-nav">
                <ul className="mobile-nav-list">
                  <li>
                    <a href="/" className="subheading" onClick={toggleMobileMenu}>Home</a>
                  </li>
                  <li>
                    <a href="/about" className="subheading" onClick={toggleMobileMenu}>About</a>
                  </li>
                  <li>
                    <a href="/programs" className="subheading" onClick={toggleMobileMenu}>Programs</a>
                  </li>
                  <li>
                    <a href="/get-involved" className="subheading" onClick={toggleMobileMenu}>Get Involved</a>
                  </li>
                  <li>
                    <a href="/contact" className="subheading" onClick={toggleMobileMenu}>Contact</a>
                  </li>
                </ul>
                <div className="mobile-button-container">
                  <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7164685602104225792"
                     target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={toggleMobileMenu}>Subscribe
                    for News</a>
                  <a href="mailto:info@cherryontech.org" className="btn-stroke" onClick={toggleMobileMenu}>Contact
                    Us</a>
                </div>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
