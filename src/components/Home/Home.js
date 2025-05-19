import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import handCoding from "../../Assets/home.gif";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Harshika Rathod";

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeoutId);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }
  }, [displayText, isTyping]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="text-container" style={{ textAlign: "left" }}>
                <h1 
                  style={{ 
                    paddingBottom: 15,
                    fontSize: "3.5rem",
                    opacity: 1,
                    animation: "fadeIn 1s ease-in-out",
                    margin: 0
                  }} 
                  className="heading font-extrabold"
                >
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 
                  className="heading-name font-bold"
                  style={{ 
                    fontSize: "4.5rem",
                    margin: 0
                  }}
                >
                  I'M
                  <strong 
                    className="main-name"
                    style={{
                      animation: "fadeIn 1.5s ease-in-out",
                    }}
                  >
                    {" "}
                    {displayText}
                    <span className="typing-cursor">|</span>
                  </strong>
                </h1>

                <div 
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                    fontWeight: "400",
                    marginTop: "9px"
                  }}
                >
                  B.Tech Student at Shri Ramdeobaba College of Engineering , Nagpur
                </div>
              </div>

              <div style={{ padding: 30 }}>
                {/* Space below the text */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={handCoding}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .typing-cursor {
          animation: blink 0.7s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          .heading {
            font-size: 2.5rem !important;
          }
          .heading-name {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;