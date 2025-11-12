import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";
import Logo from "../../assets/Logo.svg";       // header logo
import AvatarPlaceholder from "../../assets/avatar.svg"; // placeholder avatar

function CreateStudentAccount() {
  const navigate = useNavigate();

  return (
    <div className="CApage-wrapper">
      <div className="CAcard">

        {/* Header bar */}
        <div className="cs-header">
          <img src={Logo} alt="Logo" className="cs-header-logo" />
          <h2>Create Student Account</h2>
        </div>

        {/* Form container */}
        <div className="cs-form">
          {/* Screen name */}
          <div className="cs-field">
            <label>Screen name</label>
            <input type="text" />
          </div>

          {/* Class code (optional) */}
          <div className="cs-field">
            <label>Class Code (Optional)</label>
            <input type="text" />
          </div>

          {/* Avatar circle */}
          <div className="cs-avatar-wrapper">
            <div className="cs-avatar-circle">
                <img src={AvatarPlaceholder} alt="Avatar" className="cs-avatar" />
            </div>
            <button className="cs-avatar-plus">+</button>
          </div>


          {/* Username */}
          <div className="cs-field">
            <label>Username</label>
            <input type="text" />
          </div>

          {/* Confirm Username */}
          <div className="cs-field">
            <label>Confirm Username</label>
            <input type="text" />
          </div>

          {/* Password */}
          <div className="cs-field">
            <label>Password</label>
            <input type="password" />
          </div>

          {/* Confirm Password */}
          <div className="cs-field">
            <label>Confirm Password</label>
            <input type="password" />
          </div>

          {/* Create account button */}
          <button className="cs-create-btn">Create account</button>
        </div>

        {/* Footer with back arrow */}
        <div className="cs-footer">
          <button className="cs-back" onClick={() => navigate("/")}>←</button>
        </div>
      </div>
    </div>
  );
}

export default CreateStudentAccount;
