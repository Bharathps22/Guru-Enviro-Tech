import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Header from './Header'; // Import the Header component

const Sidebar = () => {
  const [show, setShow] = useState(false); // State for the sidebar (Offcanvas)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      {/* Include Header function as a prop to header */}
      <Header handleShow={handleShow} />

      <div className="d-flex">
        {/* Sidebar (Hidden on smaller screens) */}
        <div
          className="bg-dark text-white p-3 d-none d-md-block"
          style={{ width: "250px", minHeight: "100vh" }}
        >
          <h4>Sidebar</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center justify-content-between"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Home
                <i
                  className={`bi ${
                    isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </a>
              {isDropdownOpen && (
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#home1">
                      Home 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#home2">
                      Home 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Offcanvas for mobile */}
        <Offcanvas show={show} onHide={handleClose} className="bg-dark text-white">
          <Offcanvas.Header closeButton >
            <Offcanvas.Title>Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link text-white d-flex align-items-center justify-content-between"
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  Home
                  <i
                    className={`bi ${
                      isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
                    }`}
                  ></i>
                </a>
                {isDropdownOpen && (
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#home1">
                        Home 1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#home2">
                        Home 2
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <div className="flex-grow-1 p-5">
          <h1>Main Content</h1>
          <p>This is the main content area in mobile view sidebar in offcanvas.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
