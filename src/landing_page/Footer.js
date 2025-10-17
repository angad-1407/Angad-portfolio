import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white pt-5 pb-3"
      style={{ borderTop: "1px solid #333" }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div className="row justify-content-between align-items-start text-center text-md-start">
          {/* Quick Links */}
          <div className="col-md-5 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#about"
                  className="text-secondary text-decoration-none d-block mb-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary text-decoration-none d-block mb-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-secondary text-decoration-none d-block mb-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-secondary text-decoration-none d-block"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary text-decoration-none d-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-5 mb-4 d-flex flex-column align-items-center align-items-md-end">
            <h5 className="fw-bold mb-3 text-center text-md-end">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61555751845148"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/Angad_Yadav3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/angad_yadav.125/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/angad-aheer-895630317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/angad-1407"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="border-secondary" />
        <div className="text-center text-secondary mt-3">
          <small>
            © {new Date().getFullYear()}{" "}
            <span className="text-danger fw-bold">ANGAD AHEER</span>. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
