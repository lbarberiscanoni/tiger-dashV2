import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Graph from "./Graph";
import UploadComponent from "./DataUpload";
import ResourceMap from "./ResourceMap";
import QPanel from "./Queries";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      queries: [
        {
          graphData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                  {
                      label: "2017",
                      fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                      pointHoverRadius: 5,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [65, 59, 80, 81, 56, 55, 40],
                      spanGaps: false,
                  }
              ]
          },
          graphType: "line",
          date: "2018-11-03", 
          show: false,
        },
        {
          graphData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                  {
                      label: "2018",
                      fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                      pointHoverRadius: 5,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [65, 59, 80, 81, 56, 55, 40],
                      spanGaps: false,
                  }
              ]
          },
          graphType: "radar",
          date: "2018-11-02"
        },
        {
          graphData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                  {
                      label: "2019",
                      fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                      pointHoverRadius: 5,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [65, 59, 80, 81, 56, 55, 40],
                      spanGaps: false,
                  }
              ]
          },
          graphType: "bar",
          date: "2018-11-05"
        }
      ]
    }
  }

  saveQuery(ob) {
    let lastState = this.state.queries
    lastState.push(ob)
    this.setState({
      "queries": lastState
    })
  }

  render() {

    return(
      <div>
        <div className="row">
          <h5 className="brand-logo center">Tiger Dash</h5>
        </div>
        <Router basename={process.env.PUBLIC_URL}>
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
                <Route path="/" exact component={ () => <div className="row"><Graph saveQuery={ (ob) => this.saveQuery.bind(this, ob) } key="1"/></div> } />
                <Route path="/map/" component={ () => <div className="row"><h2 className="center-align">Resource Availability</h2><ResourceMap /></div> } />
                <Route path="/saved/" component={ () => <div className="row"><h2 className="center-align">All of Your Queries in One Place</h2><QPanel queries={ this.state.queries } /></div> } />
                <Route path="/upload/" component={ () => <div className="row"><h2 className="center-align">Upload New Data to the App</h2><UploadComponent /></div> } />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
