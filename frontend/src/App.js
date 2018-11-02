import React, { Component } from "react";
import FastList from "./components/FastList";
import "./App.css";

const API = "http://localhost:8000/api";

class App extends Component {
  state = {
    fasts: []
  };

  fetchFasts = () => {
    fetch(`${API}/fasts`)
      .then(response => response.json())
      .then(data => this.setState({ fasts: data }));
  };

  componentDidMount() {
    this.fetchFasts();
  }

  render() {
    return (
      <div className="App">
        <FastList fasts={this.state.fasts} />
      </div>
    );
  }
}

export default App;
