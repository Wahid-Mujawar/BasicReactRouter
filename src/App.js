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
import NotFoundPage from "./RouterPages";

class App extends Component {
  render () {
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  }
}

export default App;
