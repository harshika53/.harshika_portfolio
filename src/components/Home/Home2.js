import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar2 from '../../Assets/avatar2.png';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.3em" }}>
              GET <span className="purple"> KNOW MORE  </span> ABOUT ME 
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
               I really enjoy web development — learning new stuff, trying out different tools, and building cool things is what keeps me going.I’ve got a strong interest in <b className="purple">software development </b> and <b className="purple">cloud computing </b> — especially working with <b className="purple"> AWS </b> and I’m always looking for opportunities to contribute to impactful projects in these areas.
              <br /> 
              <br />
              Lately, I’ve also started exploring cybersecurity a bit, especially through CTF events and hands-on learning. It’s something I’m curious about and plan to dive deeper into.
              <br />
              <br />
               These days, I’m focused on improving my skills in <b className="purple"> React.js </b> and other modern <b className="purple"> Javascript frameworks </b> I regularly practice <b className="purple"> DSA </b> on  <b className="purple"> LeetCode </b> and <b className="purple"> HackerRank </b> to get better at problem-solving, and I’ve taken part in hackathons like <b className="purple"> Smart India Hackathon </b> to gain practical experience.
               <br />
               <br />
               My goal is to work on meaningful projects in a dynamic and collaborative environment where I can grow, learn, and help the organization succeed through my contributions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar2} className="img-fluid" alt="avatar"
              style={{ width: "350px", height: "auto" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harshika53"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
    
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshika-rathod "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshikar_44?igsh=dWsyMHZzaWtzMHQ="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            <li className="social-icons">
              <a
                 href="mailto:harshikarathod42@gmail.com"
                 target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
             <AiOutlineMail />
            </a> 
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
