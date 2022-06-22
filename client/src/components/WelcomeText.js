import React from "react";
import logo from "../images/logo.png";

function WelcomeText() {
  return (
    <div>
      <div id="co-text">
        <h3>
          Welcome to
          <h1 id="logo-text">
            The Castle Shop ©
            <img src={logo} alt="company logo" id="logo" />
          </h1>
        </h3>
        <h3>... where you can call your dreams home.</h3>
      </div>
    </div>
  );
}

export default WelcomeText;
