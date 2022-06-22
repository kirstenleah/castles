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
            <Account />
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
