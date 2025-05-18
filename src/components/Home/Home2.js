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
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
               I really enjoy web development — learning new stuff, trying out different tools, and building cool things is what keeps me going.
              <br />
              <br /> I also find cloud computing pretty interesting, especially working with 
              <i>
                <b className="purple"> AWS. </b>
              </i>
              <br />
              <br />
              These days, I’m focusing on improving my skills in:
              <i>
                <b className="purple"> React.js</b> and other modern JavaScript frameworks. Along with that, I regularly practice DSA on  {" "}

                <b className="purple">
                    Leetcode and HackerRank   
                </b>
              </i>
                   to get better at problem-solving. I’ve also taken part in hackathons like SIH and CTF events for hands-on experience.
              <br />
              <br />
             Apart from that, I’m involved in my college community — I’m the
               <b className="purple"> Literary Head </b> of the <b className="purple"> CySec Committee </b> and the <b className="purple"> Documentation Lead</b> at the <b className="purple"> RBU Cyber Club</b>

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
