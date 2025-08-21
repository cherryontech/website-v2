import React from 'react';
import '../styles/components/header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="cherry-on-tech.png" alt="Organization Logo" className="logo" />
        <nav>
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
        <div className="button-container">
            <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7164685602104225792" target="_blank" rel="noopener noreferrer" className="btn-secondary">Subscribe for News</a>
            <a href="mailto:info@cherryontech.org" className="btn-stroke">Contact Us</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
