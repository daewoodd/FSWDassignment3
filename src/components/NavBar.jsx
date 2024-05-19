// src/components/Header.jsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar
    style={{
      backgroundColor: "#3498db",
      height: "80px",
      borderBottom: "2px solid #2980b9",
    }}
    variant="dark"
    expand="lg"
  >
    <Navbar.Brand
      as={Link}
      to="/"
      style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}
    >
      Portfolio
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" style={{ color: "#fff", fontSize: "18px" }}>
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/skills"
          style={{ color: "#fff", fontSize: "18px" }}
        >
          Skills
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/projects"
          style={{ color: "#fff", fontSize: "18px" }}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/contact"
          style={{ color: "#fff", fontSize: "18px" }}
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
