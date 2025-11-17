import React from "react";
import { useNavigate } from "react-router-dom";   // ✅ import navigate
import "./TeacherHomePage.css";
import avatar from "../../assets/avatar.svg";

function TeacherHomePage() {
  const navigate = useNavigate();                // ✅ hook for navigation

  // Generate a random class code (example)
  const classCode = Math.random().toString(36).substring(2, 7);

  return (
    <div className="teacher-homepage">
      {/* Header */}
      <header className="teacher-header">
        <h1>Teacher Home Page</h1>
      </header>

      {/* Profile Section */}
      <section className="teacher-profile">
        <div className="profile-pic">
          <img src={avatar} alt="Profile Placeholder" />
        </div>
        <div className="profile-info">
          <h2 className="teacher-name">Teacher's Name</h2>
        </div>
      </section>

      {/* Classes Section */}
      <section className="teacher-classes">
        <h3>My Classes</h3>
        <div className="class-item">
          <span className="class-name">CS1200</span>
          <span className="class-code">Class Code: {classCode}</span>
          <button className="delete-btn">🗑️</button>
        </div>
        <div className="create-class">
          <span className="plus-sign">➕</span>
          <span className="create-text">Create New Class</span>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="teacher-actions">
        <button className="btn btn-orange">Dashboard</button>
        <button className="btn btn-orange">Analytical Dashboard</button>
        <button className="btn btn-dark">Create Trivia</button>
        <button className="btn btn-dark">Create Polls</button>
        {/* ✅ AI Response Review now navigates to Create Trivia */}
        <button className="btn btn-orange" onClick={() => navigate("/goToCTQ")}>
          AI Response Review
        </button>
      </section>

      {/* Footer */}
      <footer className="teacher-footer">
        <button className="footer-btn">⚙️ Settings</button>
        <button className="footer-btn">🏠 Home</button>
        <button className="footer-btn" onClick={() => navigate(-1)}>
          ↩ Return
        </button>
      </footer>
    </div>
  );
}

export default TeacherHomePage;