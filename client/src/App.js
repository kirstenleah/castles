import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
// import Account from "./components/Account";

function App() {
  // const [castles, setCastles] = useState([]);
  const [users, setUsers] = useState([]);
  // const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch("/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setUsers)
      .catch((err) => console.log("💀 GET INDEX USERS", err));
  }, []);
  console.log("🧍 Users Array:", users);

  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn setUsers={setUsers} />
          </Route>

          <Route path="/navbar">
            <NavBar />
          </Route>

          <Route path="/account">
            {/* <Account purchases={purchases} /> */}
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
