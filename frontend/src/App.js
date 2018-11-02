import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import FastList from "./components/FastList";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FastList />
        </div>
      </Provider>
    );
  }
}

export default App;
