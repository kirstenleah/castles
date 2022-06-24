import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Account from "./components/Account";

function App() {
  // const [users, setUsers] = useState(null);
  const [user, setUser] = useState();

  // ------------ FETCH AREA ------------ //
  useEffect(() => {
    fetch("/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.id) {
          setUser(data);
        }
      });
  }, []);
  // ------------ FETCH AREA ------------ //

  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn setUser={setUser} />
          </Route>

          <Route path="/account">
            <Account user={user} />
          </Route>

          <Route path="/home">
            <Home user={user} />
          </Route>

          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
