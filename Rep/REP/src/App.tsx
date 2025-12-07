import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
