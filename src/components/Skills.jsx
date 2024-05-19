// src/components/Skills.jsx
import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Skills = () => (
  <Container className="my-5" style={{ color: "blue" }}>
    <h2 className="text-center">My Skills</h2>
    <Row>
      <Col md={6} className="my-3">
        <h5>Express</h5>
        <ProgressBar now={50} label="50%" />
      </Col>
      <Col md={6} className="my-3">
        <h5>React</h5>
        <ProgressBar now={20} label="20%" />
      </Col>
      {/* Add more skills as needed */}
    </Row>
    <Row>
      <Col md={6} className="my-3">
        <h5>JavaScript</h5>
        <ProgressBar now={10} label="10%" />
      </Col>
      <Col md={6} className="my-3">
        <h5>Python</h5>
        <ProgressBar now={10} label="10%" />
      </Col>
      {/* Add more skills as needed */}
    </Row>
  </Container>
);

export default Skills;
