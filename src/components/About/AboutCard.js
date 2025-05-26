import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ztca from '../../Assets/ztca.jpg';
import networking from '../../Assets/networking_basics.pdf';
import english from '../../Assets/english_it.pdf';
import { Row, Col } from "react-bootstrap";

function AboutCard({ type }) {
  const renderInvolvement = () => (
    <div className="space-y-4">
      <p className="text-base text-justify leading-relaxed"style={{ fontSize: "1.1rem" }}>
        Besides my technical skills, I'm also actively involved in college committees that have helped me grow as a team player and a leader.
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        {[
          {
            role: "Literary Head – CySec Committee (IT and Security Department)",
            desc: "Led the literary initiatives of the department's official tech committee, focusing on official documents, event scripts, and communication.",
          },
          {
            role: "Documentation Lead – RBU Cyber Club",
            desc: "Contributed to both the logistics and documentation teams. Helped in organizing events and maintaining official records and proposals.",
          },
          {
            role: "Content Lead – AARHANT'24",
            desc: "Handled event documentation, backdrop content, and supported multiple sub-events under the annual tech + cyber awareness fest.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-[#1c1c1e] p-3 rounded-lg shadow-md">
            <h5 className="text-lg font-medium" style={{ color: "#d8b4fe" }}>{item.role}</h5>
            {item.org && <p className="italic text-xs text-gray-400">{item.org}</p>}
            <p className="text-xs text-gray-300 mt-1 text-justify" style={{ fontSize: "1.0rem" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const certifications = [
    {
      title: "Zscaler Zero Trust Associate(ZTCA)",
      platform: "Zscaler Academy",
      link: ztca,
    },
    {
      title: "Networking Basics",
      platform: "Cisco Networking Academy",
      link: networking,
    },
    {
      title: "English for IT",
      platform: "Cisco Networking Academy",
      link: english,
    },
  ];

  const renderCertifications = () => (
    <Row>
      {certifications.map((cert, idx) => (
        <Col md={4} key={idx} className="mb-4 px-2">
          <Card
            style={{
              border: "1px solid #6c63ff",
              borderRadius: "8px",
              height: "100%",
            }}
             className="h-100 shadow-sm transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"
          >
            <Card.Body className="p-3">
              <blockquote className="blockquote mb-2">
                <p style={{ fontSize: "16px", color: "#7347ad" }} className="text-justify">
                  <strong>{cert.title}</strong>
                </p>
                <footer className="blockquote-footer text-xs text-justify">{cert.platform}</footer>
              </blockquote>
              <Button
                variant="primary"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                View Certificate
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "2px 2px" }}>
      <Card className="quote-card-view">
        <Card.Body className="p-3">
          <blockquote className="blockquote mb-0" style={{ margin: "0" }}>
            {type === "involvement" ? renderInvolvement() : renderCertifications()}
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;