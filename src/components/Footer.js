import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="new_social_container">
          <small className="website-rights">Website by Felcia - Built with React and Bootstrap</small>
          <small className="website-rights_haru">- HARU © 2023 -</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://api.whatsapp.com/send/?phone=6281254058512&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-whatsapp" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/sushiharu_ptk/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="https://www.linkedin.com/in/felcia-windy/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
