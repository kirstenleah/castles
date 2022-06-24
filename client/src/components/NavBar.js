// import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
  function handleExit() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  return (
    <nav>
      {user ? <p className="nav-item">Hello {user.username}</p> : null}

      <NavLink
        to="/account"
        style={{ textDecoration: "none" }}
        className="nav-item"
      >
        Account
      </NavLink>

      <NavLink
        to="/home"
        style={{ textDecoration: "none" }}
        className="nav-item"
      >
        Home
      </NavLink>

      <NavLink
        to="/logout"
        style={{ textDecoration: "none" }}
        className="nav-item"
        onClick={handleExit}
      >
        Log Out
      </NavLink>
    </nav>
  );
}

export default NavBar;
