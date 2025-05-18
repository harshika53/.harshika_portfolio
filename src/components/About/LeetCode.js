import React from "react";
import { Row } from "react-bootstrap";

function LeetCodeStats() {
  // Inline styles
  const containerStyle = {
    justifyContent: "center",
    paddingBottom: "10px",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    padding: "1.5rem",
    marginTop: "1rem",
  };

  const cardStyle = {
    backgroundColor: "#1f1f1f",
    border: "1px solid #a259ff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 0 15px rgba(162, 89, 255, 0.3)",
    transition: "transform 0.3s ease",
    maxWidth: "600px",
    width: "100%",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px",
    display: "block",
  };

  // Hover effect handled by React state
  const [hover, setHover] = React.useState(false);

  return (
    <Row style={containerStyle}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Stats
      </h1>
      <div
        style={{
          ...cardStyle,
          transform: hover ? "scale(1.03)" : "scale(1)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="https://leetcard.jacoblin.cool/rathod_044"
          alt="LeetCode Stats"
          style={imgStyle}
        />
      </div>
    </Row>
  );
}

export default LeetCodeStats;
