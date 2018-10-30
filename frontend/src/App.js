import React, { Component } from "react";
import FastList from "./components/FastList";
import "./App.css";

const API = "http://localhost:8000/api";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FastList api={API} />
      </div>
    );
  }
}

export default App;
