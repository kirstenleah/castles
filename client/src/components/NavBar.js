import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [atHome, setAtHome] = useState(true);
  const tempUsername = "Dracula";

  return (
    <nav>
      <p className="nav-item">Hello {tempUsername}</p>

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
