import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import {
  SiVercel,
  SiFigma,
  SiLinux,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <FaGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
