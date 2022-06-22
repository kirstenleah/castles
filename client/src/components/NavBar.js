import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar() {
  const [atHome, setAtHome] = useState(true);
  const tempUsername = "Dracula";
  const history = useHistory();

  function toHome(e) {
    e.preventDefault();
    setAtHome((atHome) => !atHome);
    history.push("/home");
  }
  function toAccount(e) {
    e.preventDefault();
    setAtHome((atHome) => !atHome);
    history.push("/account");
  }
  console.log("At Home?", atHome);

  return (
    <nav>
      <p className="nav-item">Hello {tempUsername}</p>

      {atHome === true ? (
        <NavLink
          className="nav-item"
          to="/account"
          onClick={toAccount}
          style={{ textDecoration: "none" }}
        >
          <p>Account</p>
        </NavLink>
      ) : null}

      <NavLink
        className="nav-item"
        to="/logout"
        style={{ textDecoration: "none" }}
      >
        <p>Log Out</p>
      </NavLink>

      {atHome === false ? (
        <NavLink
          className="nav-item"
          to="/home"
          onClick={toHome}
          style={{ textDecoration: "none" }}
        >
          <p>Home</p>
        </NavLink>
      ) : null}
    </nav>
  );
}

export default NavBar;
