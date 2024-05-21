import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">
      Portfolio
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" style={{ color: "#fff" }}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/skills" style={{ color: "#fff" }}>
          Skills
        </Nav.Link>
        <Nav.Link as={Link} to="/projects" style={{ color: "#fff" }}>
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" style={{ color: "#fff" }}>
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
