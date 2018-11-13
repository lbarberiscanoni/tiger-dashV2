import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Graph from "./Graph";
import UploadComponent from "./DataUpload";

const Index = () => <div className="row"><Graph key="1"/><Graph key="2"/></div>
const Map = () => <h2>Map</h2>;
const Saved = () => <div className="row"><h2 className="center-align">All of Your Queries in One Place</h2></div>
const Upload = () => <div className="row"><h2 className="center-align">Upload New Data to the App</h2><UploadComponent /></div>


class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
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
                      <Link to="/" className="center-align">Charts and Visualizations</Link>
                    </li>
                    <li style={{ float: "none" }}>
                      <Link to="/map/" className="center-align">Resource Availability</Link>
                    </li>
                    <li style={{ float: "none" }}>
                      <Link to="/saved/" className="center-align">Saved Queries</Link>
                    </li>
                    <li style={{ float: "none" }}>
                      <Link to="/upload/" className="center-align">Upload Data</Link>
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
    )
  }
}

export default App;
