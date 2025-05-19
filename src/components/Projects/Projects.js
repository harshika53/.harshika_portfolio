import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vision2web from "../../Assets/Projects/vision2web.png";
import webable from "../../Assets/Projects/webable.png";
import idps from "../../Assets/Projects/idps.png";
import bharatkrishi from "../../Assets/Projects/bharatkrishi.png";
import twinAi from "../../Assets/Projects/twinAi.png";
import currency from "../../Assets/Projects/currency.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vision2web}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "20px" }}>
                  Vision2Web
                </span>
              }
              description={
                <span style={{ marginBottom: "40px", display: "block" }}>
                  An AI-powered platform that converts wireframe images into clean React.js and Tailwind CSS code with real-time preview, regeneration, and design history features.
                  <br />
                  <br />
                  Techologies used : Typescript, React.js, Open Router AI, Drizzle ORM, Firebase.
                </span>
              }
              ghLink="https://github.com/harshika53/vision2web"
              demoLink="https://vision2web.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webable}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "20px" }}>
                  WebAble-Accessibility Analyzer
                </span>
              }
              description={
                <span style={{ marginBottom: "25px", display: "block" }}>
                  A comprehensive web accessibility scanning tool that leverages Lighthouse and axe-core to evaluate websites for WCAG compliance, providing detailed reports, historical comparisons, actionable recommendations, and a visual dashboard with accessibility metrics and scores.
                  <br />
                  <br />
                  Technologies Used : React.js, Node.js, Express.js, CSS3
                </span>
              }
              ghLink="https://github.com/harshika53/WebAble"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idps}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "20px" }}>
                  IDPS
                </span>
              }
              description={
                <span style={{ marginBottom: "15px", display: "block" }}>
                  A real-time IDPS to monitor, detect, and block suspicious activities in a network. It automatically identifies malicious IPs from Urls, files, terminates harmful sessions, and integrates firewall protection for enhanced security. Web Scrapping for scrapping the content is used and Redis for caching the content.
                  <br />
                  <br />
                  Technologies Used : HTML, CSS, JavaScript, Python, Flask, Redis.
                </span>
              }
              ghLink="https://github.com/harshika53/IDPS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bharatkrishi}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "10px" }}>
                  BharatKrishi
                </span>
              }
              description={
                <span style={{ marginBottom: "10px", display: "block" }}>
                  A static digital platform designed to connect farmers directly with buyers worldwide to provide a seamless and efficient way for farmers to sell their products, promoting sustainability and economic growth.
                  <br />
                  <br />
                  Technologies Used: Typescript, React.js, Tailwind CSS, shadcn-ui. 
                </span>
              }
              ghLink="https://github.com/harshika53/BharatKrishi-Website"
              demoLink="https://bharat-krishi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twinAi}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "10px" }}>
                  TwinAI
                </span>
              }
              description={
                <span style={{ marginBottom: "40px", display: "block" }}>
                  A Google Gemini clone.
                  <br />
                  <br />
                  Technologies Used : React.js, Tailwind CSS, Google Gemini API.
                </span>
              }
              ghLink="https://github.com/harshika53/TwinAI"
              demoLink="https://google-gemini-alpha-seven-23.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "20px" }}>
                  Currency Converter
                </span>
              }
              description={
                <span style={{ marginBottom: "30px", display: "block" }}>
                  A simple and intuitive web-based currency converter.
                  <br />
                  <br />
                  Technologies used : HTML, CSS and Javascript.
                </span>
              }
              ghLink="https://github.com/harshika53/Currency-Converter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
