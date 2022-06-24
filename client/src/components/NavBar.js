import { NavLink, useHistory } from "react-router-dom";

function NavBar({ user }) {
  function handleExit() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  return (
    <nav className="account-nav">
      {user ? <p className="nav-text">Hello {user.username}</p> : null}

      <NavLink
        to="/account"
        style={{ textDecoration: "none" }}
        className="nav-item"
      >
        Account
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
