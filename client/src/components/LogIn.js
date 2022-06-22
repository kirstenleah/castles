import React from "react";
import castle from "../images/watercolor1.png";
import logoImg from "../images/logo.png";

function LogIn() {
  return (
    <>
      <div className="idx-wt">
        <div className="co-text">
          <h3>
            Welcome to
            <div className="logo-text">
              The Castle Shop ©
              <img src={logoImg} alt="company logo" className="logo" />
            </div>
          </h3>
          <h3>... where we call your dreams home.</h3>
        </div>
      </div>

      <div className="log-in-pg">
        <div id="castle-container">
          <img src={castle} alt="castle art" id="login-castle" />
        </div>

        <div id="input-form-container">
          <form id="main-form">
            <h2>Log In</h2>

            <div className="input-parent">
              <label>Username</label>
              <input type="text" id="username" />
            </div>

            <div className="input-parent">
              <label>Password</label>
              <input type="password" id="password" />
            </div>

            <button type="submit">Login</button>
            <button type="submit">New Account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
