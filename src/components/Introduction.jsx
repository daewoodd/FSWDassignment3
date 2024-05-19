// src/components/Introduction.jsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Introduction = () => (
  <Container className="text-center my-5">
    <Row>
      <Col md={4} className="mx-auto">
        <Image src="../taimur.jpeg" roundedCircle fluid />
      </Col>
    </Row>
    <Row>
      <Col className="my-4" style={{ color: "blue" }}>
        <h1>Hello, I am Taimur Mahmood! Hope you are doing well</h1>
        <p>
          CS sophomore | Full-Stack Web Developer | React JS, .NET, DB
          Management | BSCS
        </p>
      </Col>
    </Row>
  </Container>
);

export default Introduction;
