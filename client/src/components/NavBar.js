import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
  const [atHome, setAtHome] = useState(true);

  return (
    <nav>
      {user ? <p className="nav-item">Hello {user.username}</p> : null}

      {atHome === true ? (
        <NavLink
          to="/account"
          onClick={() => setAtHome(false)}
          style={{ textDecoration: "none" }}
          className="nav-item"
        >
          Home
        </NavLink>
      ) : (
        <NavLink
          to="/home"
          onClick={() => setAtHome(true)}
          style={{ textDecoration: "none" }}
          className="nav-item"
        >
          Account
        </NavLink>
      )}

      <NavLink
        to="/logout"
        style={{ textDecoration: "none" }}
        className="nav-item"
      >
        Log Out
      </NavLink>
    </nav>
  );
}

export default NavBar;
