import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestChart from "./TestChart";

const Index = () => <div><TestChart /></div>
const Map = () => <h2>Map</h2>;
const Saved = () => <h2>Saved</h2>;
const Upload = () => <h2>Upload</h2>;

const App = () => (
  <div>
    <div className="row">
      <h5 className="brand-logo center">Tiger Dash</h5>
    </div>
    <Router>
      <div className="row" style={{ display: "flex" }}>
        <div className="col s1 m2 l1" style={{ width: "20%" }}>
          <div className="nav-wrapper">
            <nav style={{ height: 250 }}>
              <ul style={{ padding: 0 }}>
                <li style={{ float: "none" }}>
                  <Link to="/" className="center-align">Home</Link>
                </li>
                <li style={{ float: "none" }}>
                  <Link to="/map/" className="center-align">Map</Link>
                </li>
                <li style={{ float: "none" }}>
                  <Link to="/saved/" className="center-align">Saved</Link>
                </li>
                <li style={{ float: "none" }}>
                  <Link to="/upload/" className="center-align">Upload</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="col s11 m10 l11" style={{ flex: 1 }}>
            <Route path="/" exact component={Index} />
            <Route path="/map/" component={Map} />
            <Route path="/saved/" component={Saved} />
            <Route path="/upload/" component={Upload} />
        </div>
      </div>
    </Router>
  </div>
);

export default App;
