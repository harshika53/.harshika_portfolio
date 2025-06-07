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
    <Container fluid className="home-about-section" id="about" style={{ paddingTop: "2rem", marginTop: "0" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize:"2.3 rem" }}>
              Get To Know <span className="purple"> Me </span> 
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify", fontSize: "0.5rem" }}>
               My journey in tech began with a curiosity for learning, experimenting with new tools, and a strong passion for building and problem-solving. This led me to pursue Computer Science with a focus on Cyber Security. My primary interests lie in <b className="purple">Frontend development </b> and <b className="purple">cloud computing </b> with a particular focus on <b className="purple"> AWS. </b> I actively look for opportunities to contribute to impactful projects and grow through real-world experiences.
              <br /> 
              <br />
              Recently, I have also begun exploring the field of cybersecurity through Capture The Flag (CTF) events and hands-on learning. It is an area I find intriguing and intend to explore further.
              <br />
              <br />
              Currently, I am dedicated to enhancing my proficiency in <b className="purple"> React.js , Python </b> and other modern <b className="purple"> Javascript frameworks. </b> To strengthen my problem-solving skills, I regularly practice <b className="purple"> DSA </b> on platforms such as  <b className="purple"> Leetcode </b> and more. Participating in national-level hackathons such as <b className="purple"> Smart India Hackathon </b> has further enriched my practical experience and strengthened my collaborative mindset.
               <br />
               <br />
               I aspire to work on innovative and meaningful projects in a dynamic, team-oriented environment—where continuous learning and impactful contribution go hand in hand.
            </p>
          </Col>
          <Col md={4} className="myAvtar"style={{ marginTop: "2.1rem" }}>
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
