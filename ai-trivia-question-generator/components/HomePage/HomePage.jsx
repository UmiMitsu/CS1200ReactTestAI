import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Logo from "../../assets/Logo.svg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-wrapper">
      <div className="homepage-card">
        {/* Logo as head */}
        <img src={Logo} alt="Logo" className="hp-logo" />

        {/* Broken line directly under logo */}
        <div className="hp-divider" />

        {/* Blue buttons stacked */}
        <button className="btn btn-blue" onClick={() => navigate("/create")}>
          Sign In
        </button>
        <button className="btn btn-blue" onClick={() => navigate("/about")}>
          About
        </button>

        {/* Gap between groups */}
        <div className="hp-gap" />

        {/* Orange buttons stacked */}
        <button className="btn btn-orange" onClick={() => navigate("/create-teacher")}>
          Create teacher account
        </button>
        <button className="btn btn-orange" onClick={() => navigate("/create-student")}>
          Create student account
        </button>
      </div>
    </div>
  );
}

export default HomePage;
