import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import microsoft from "../../assets/microsoft.svg";
import google from "../../assets/google.svg";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Normally you'd validate credentials here
    navigate("/teacher-home");
  };

  return (
    <div className="page-wrapper">
      <div className="page-card login-container">
        {/* Header */}
        <div className="page-header login-header">
          <img src={logo} alt="Logo" className="login-logo" />
          <h2 className="login-title">Login</h2>
        </div>

        {/* Form */}
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="button" onClick={() => navigate("/handleSignIn")} className="login-button">
            Sign In
          </button>
        </form>

        {/* SSO Section */}
        <div className="sso-section">
          <p className="sso-title">Single sign on options</p>
          <button className="sso-button">
            <img src={microsoft} alt="Microsoft" className="sso-icon" />
            Sign in with Microsoft
          </button>
          <button className="sso-button">
            <img src={google} alt="Google" className="sso-icon" />
            Sign in with Google
          </button>
        </div>

        {/* Footer */}
        <div className="page-footer">
          <div className="back-icon" onClick={() => navigate("/")}>
            ←
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
