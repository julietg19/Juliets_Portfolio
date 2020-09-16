import React, { Component } from "react";
import Home from "./components/Pages/Home";
import "./App.css";
import Nav from "./components/Layouts/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projectspage from "./components/Pages/Projectspage";

export default class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/projects" component={Projectspage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
