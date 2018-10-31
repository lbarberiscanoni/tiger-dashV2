import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestChart from "./TestChart";

const Index = () => <div><h2>Home</h2><TestChart /></div>
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => (
  <Router>
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" class="brand-logo center">Tiger Dash</a>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </div>
  </Router>
);

export default App;
