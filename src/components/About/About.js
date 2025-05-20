import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LeetCodeStats from "./LeetCode";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "2px",
              paddingBottom: "20px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple"> Campus Involvement </strong> and <strong className="purple">  Leadership</strong>
            </h1>
            <AboutCard type="involvement" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", padding: "10px 0 20px" }}>
              <strong className="purple">Certifications</strong> I've Completed
             </h1>
            <AboutCard type="certifications" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Technologies <strong className="purple">I Use</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <LeetCodeStats />
      </Container>
    </Container>
  );
}

export default About;
