import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiMysql,
  SiOracle,
  SiAmazonwebservices,
} from "react-icons/si";

function Techstack() {
  const technologies = [
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <SiAmazonwebservices />, name: "AWS" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col 
          xs={4} 
          md={2} 
          className="tech-icons" 
          key={index}
          title={tech.name} // This adds a basic tooltip
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
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;