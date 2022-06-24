import { NavLink } from "react-router-dom";

function AcNavBar({ user }) {
  function handleExit() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  return (
    <nav>
      {user ? <p className="nav-text">Hello {user.username}</p> : null}

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

export default AcNavBar;
