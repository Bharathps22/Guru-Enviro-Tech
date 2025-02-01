import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar sticky="top" bg="light" expand="xxl">
      <Container>
        <Navbar.Brand href="#">Brand</Navbar.Brand>

        {/* Navbar Toggle Button for sm and xs devices */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="d-block d-md-none"
        />

        {/* Offcanvas Component visible only on sm and xs devices */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="d-xl-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Contact
              </Nav.Link>

              <NavDropdown title="Form" id="dropdownMenuButton">
                <NavDropdown.Item as={Link} to="/customform">
                  Sample Form 1
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Table" id="dropdownMenuButton">
                <NavDropdown.Item as={Link} to="/format">
                  Sample Table 1
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        {/* Navbar links visible on larger devices (md, lg) */}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
