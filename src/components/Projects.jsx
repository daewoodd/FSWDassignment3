// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  { image: "projects.jpeg", title: "Project 1" },
  { image: "projects.jpeg", title: "Project 2" },
  { image: "projects.jpeg", title: "Project 3" },
];

const Projects = () => (
  <Container className="my-5" style={{ color: "blue" }}>
    <h2 className="text-center" color="red">
      Projects
    </h2>
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index} className="my-3">
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
