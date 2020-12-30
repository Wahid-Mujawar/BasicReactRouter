import './App.css';
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import MainPage from "./RouterPages";

class App extends Component {
  render () {
    return <Router>
      <Route path="/" component={MainPage}/>
    </Router>
  }
}

export default App;
