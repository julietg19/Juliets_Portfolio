import React from "react";
import Home from "./components/Pages/Home";
import "./App.css";
import Nav from "./components/Layouts/Nav";
import About from "./components/Pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projectspage from "./components/Pages/Projectspage";

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projectspage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
