import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestChart from "./TestChart";

const Index = () => <div><h2>Home</h2><TestChart /></div>
const Map = () => <h2>Map</h2>;
const Saved = () => <h2>Saved</h2>;
const Upload = () => <h2>Upload</h2>;

const App = () => (
  <div>
    <div className="row">
      <h5 className="brand-logo center">Tiger Dash</h5>
    </div>
    <Router>
      <div className="row">
        <div className="col s3 m4 l3">
          <div className="nav-wrapper">
            <nav style={{ height: 250 }}>
              <ul>
                <li style={{ float: "none" }}>
                  <Link to="/">Home</Link>
                </li>
                <li style={{ float: "none" }}>
                  <Link to="/map/">Map</Link>
                </li>
                <li style={{ float: "none" }}>
                  <Link to="/saved/">Saved</Link>
                </li>
                <li style={{ float: "none" }}>
                  <Link to="/upload/">Upload</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="col s9 m8 l9">
          <div className="container">
            <Route path="/" exact component={Index} />
            <Route path="/map/" component={Map} />
            <Route path="/saved/" component={Saved} />
            <Route path="/upload/" component={Upload} />
          </div>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
