import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vision2web from "../../Assets/Projects/vision2web.png";
import WebAble from "../../Assets/Projects/WebAble.png";
import idps from "../../Assets/Projects/idps.png";
import bharatkrishi from "../../Assets/Projects/bharatkrishi.png";
import todo from "../../Assets/Projects/todo.png";
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
                  <b className="purple">Techologies used : </b> Typescript, React.js, Open Router AI, Drizzle ORM, Firebase.
                </span>
              }
              ghLink="https://github.com/harshika53/vision2web"
              demoLink="https://vision2web.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebAble}
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
                  <b className="purple">  Technologies Used : </b> React.js, Node.js, Express.js, CSS3
                  <br />
                  <br />
                  <b className="purple">  Status : </b> In Progress
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
                  A real-time Intrusion Detection and Prevention System to monitor, detect, and block suspicious activities in a network. It automatically identifies malicious IPs from Urls, files, terminates harmful sessions, and integrates firewall protection for enhanced security. Web Scrapping for scrapping the content is used and Redis for caching the content.
                  <br />
                  <br />
                  <b className="purple">Technologies Used :</b> HTML, CSS, JavaScript, Python, Flask, Redis.
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
                  <b className="purple"> Technologies Used: </b>Typescript, React.js, Tailwind CSS, shadcn-ui. 
                </span>
              }
              ghLink="https://github.com/harshika53/BharatKrishi-Website"
              demoLink="https://bharat-krishi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title={
                <span style={{ color: "#a020f0", fontWeight: "bold", display: "block", marginBottom: "10px" }}>
                  Dockerized Flask Todo App
                </span>
              }
              description={
                <span style={{ marginBottom: "40px", display: "block" }}>
                  A simple and lightweight To-Do List web application built using Flask and Python, containerized with Docker where User can add, view and delete tasks easily.
                  <br />
                  <br />
                  <b className="purple">Technologies Used : </b> Python , Flask, Docker, HTML, CSS ,JS.
                </span>
              }
              ghLink="https://github.com/harshika53/dockerized-flask-todo"
              //demoLink="https://google-gemini-alpha-seven-23.vercel.app/"
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
                  <b className="purple"> Technologies used :</b> HTML, CSS and Javascript.
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
