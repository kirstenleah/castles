import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import castle from "../images/watercolor1.png";
import logoImg from "../images/logo.png";

function LogIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    // -------------- FETCH ------------ //
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          history.push("/home");
        });
      } else {
        res.json().then((json) => setError(json.error, error));
        alert("Incorrect name or password.");
      }
    });
  }
  // -------------- FETCH ------------ //

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
          <form onSubmit={handleSubmit} id="main-form">
            <h2>Log In</h2>

            <div className="input-parent">
              <label>Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-parent">
              <label>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
