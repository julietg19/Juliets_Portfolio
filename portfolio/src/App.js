import React from "react";
import Home from "./components/Pages/Home";
import "./App.css";
import Nav from "./components/Layouts/Nav";
import About from "./components/Pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
