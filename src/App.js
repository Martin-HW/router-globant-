import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import Home from "./pages/Home";
import Menu from "./Menu";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>My react router from globant</h1>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/uno" component={ProjectOne} />
          <Route exact path="/dos" component={ProjectTwo} />
          <Route exact path="/tres" component={ProjectThree} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
