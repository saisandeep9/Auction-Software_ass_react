import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Login from "./components/login";
import Welcome from "./components/welcome";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route path="/" exact component={Projects} />
          <Route path="/login" exact component={Login} />
          <Route path="/welcome" exact component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;
