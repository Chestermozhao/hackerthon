import React, { Component } from 'react';
import './App.css';
import Header from "./header.js";
import Nav from "./Nav.js";
import Home from "./home";
import Signin from "./signin";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <Nav />
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            {/* <Route path="/signup" component={Signup} /> */}
            {/* <Route exact path="/jobs" component={Job} />
            <Route exact path="/courses" component={Courses} /> */}


          </div>
        </div>
      </Router>

    );
  }
}

export default App;