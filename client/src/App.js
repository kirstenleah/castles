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
import Account from "./components/Account";

function App() {
  const [castles, setCastles] = useState([]);
  // const [users, setUsers] = useState([]);
  const [purchases, setPurchases] = useState([]);

  // ------------ FETCH AREA  ------------  //
  useEffect(() => {
    fetch("/castles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCastles)
      .catch((err) => console.log("💀 GET INDEX CASTLES", err));
  }, []);
  // console.log("🏰 Castles Array:", castles);
  // ------------ FETCH AREA  ------------  //
  // useEffect(() => {
  //   fetch("/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then(setUsers)
  //     .catch((err) => console.log("💀 GET INDEX USERS", err));
  // }, []);
  // console.log("🧍 Users Array:", users);
  // ------------ FETCH AREA  ------------  //
  useEffect(() => {
    fetch("/purchases", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setPurchases)
      .catch((err) => console.log("💀 GET INDEX PURCHASES", err));
  }, []);
  console.log("💰 Purchases Array:", purchases);
  // ------------ FETCH AREA  ------------  //

  function purchaseCastle(castle) {
    let data = { castle_id: castle.id, user_id: 5 };

    // ----------- FETCH AREA -------------- //
    fetch("/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("Successfully added purchase:", data);
      })
      .catch((error) => {
        console.error("Error adding new purchase:", error);
      });
    // ------------ FETCH AREA  ------------  //
  }

  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/navbar">
            <NavBar />
          </Route>

          <Route path="/account">
            <Account purchases={purchases} />
          </Route>

          <Route path="/home">
            <Home castles={castles} purchaseCastle={purchaseCastle} />
          </Route>

          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
