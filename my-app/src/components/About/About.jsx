import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Screenshot from "../../assets/Logo.svg"; // replace with your actual image path

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      <div className="about-card">
        {/* Header */}
        <div className="about-header">
          <h2>About Us</h2>
        </div>

        {/* Main text pane */}
        <div className="about-text-pane">
          <p>
            THINKUP! Trivia and Polling App is designed to help students and
            teachers alike enhance their learning with the power of AI. It
            provides them with trivia questions and sample answers that spark
            discussions that deepen understanding and engagement, as well as
            keeping track of metrics that help teachers figure out what types of
            questions are most effective in meeting their goals.
          </p>
        </div>

        {/* Screenshot image */}
        <img src={Screenshot} alt="App screenshot" className="about-image" />

        {/* Bottom return button */}
        <div className="about-footer">
          <button className="about-back" onClick={() => navigate("/")}>
            ←
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
