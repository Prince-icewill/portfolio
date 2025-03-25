import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Noble</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer_link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://x.com/icewill_noble?t=olczuw7acdZi-JT2szMo9A&s=09"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/icewill_23/profilecard/?igsh=MXQ2OWd4dWp0OTMycg=="
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="" className="footer_social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; Icecoder. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
