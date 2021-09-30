import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages";
import VolunteersLogin from "./pages/volunteers-login";
import VolunteersRegister from "./pages/volunteers-register";
import VolunteersHomepage from "./pages/volunteers-homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/volunteers/login" component={VolunteersLogin} />
        <Route
          exact
          path="/volunteers/register"
          component={VolunteersRegister}
        />
      </Switch>
      <Route exact path="/volunteers/homepage" component={VolunteersHomepage} />
    </Router>
  );
}

export default App;
