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
  const tools = [
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col 
          xs={4} 
          md={2} 
          className="tech-icons" 
          key={index}
          title={tool.name}
          style={{
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;