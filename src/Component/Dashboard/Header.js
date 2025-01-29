import React from "react";
import { Container } from "react-bootstrap";

const Header = ({ handleShow }) => {
  return (
    <header className="bg-dark fixed-top py-2">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <button
              className="btn btn-outline-light d-md-none"
              onClick={handleShow}
            >
              <i className="bi bi-list"></i> {/* Hamburger Icon */}
            </button>
            <a href="#home" className="text-white ms-3 text-decoration-none">
              Home
            </a>
            <a href="#about" className="text-white ms-3 text-decoration-none">
              About
            </a>
            <a
              href="#services"
              className="text-white ms-3 text-decoration-none"
            >
              Services
            </a>
            <a href="#contact" className="text-white ms-3 text-decoration-none">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
