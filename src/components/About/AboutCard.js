import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div style={{ maxWidth:"2000px", margin: "0 auto", padding: "2px 2px" }}>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{ marginLeft: "0", marginRight: "0" }} 
        >
          <p style={{ fontSize: "28px", textAlign: "justify" }}>
            Hola, I am <span className="purple">Harshika Rathod </span>
            from <span className="purple"> Gondia, Maharashtra.</span>
            <br />
            I am currently pursuing B.Tech from Shri Ramdeobaba College of Engineering and Management, Nagpur.
            <br />
            I have completed High School from Saraswati Junior College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AboutCard;
