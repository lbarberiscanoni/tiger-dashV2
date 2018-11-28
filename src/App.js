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
      dataPoints: {
        "2017": {
          display: true,
          values: {
            "January": {
              display: true,
              data: 65
            }, 
            "February": {
              display: true,
              data: 65
            }, 
            "March": {
              display: true,
              data: 59
            }, 
            "April": {
              display: true,
              data: 80
            }, 
            "May": {
              display: true,
              data: 45
            }, 
          }
        },
        "2018": {
          display: true,
          values: {
            "January": {
              display: true,
              data: 45
            }, 
            "February": {
              display: true,
              data: 25
            }, 
            "March": {
              display: true,
              data: 59
            }, 
            "April": {
              display: true,
              data: 30
            }, 
            "May": {
              display: true,
              data: 45
            }, 
          }
        },
      },
      queries: [
      ]
    }
  }

  saveQuery(ob) {
    let date = new Date()
    ob["date"] = date.toString().split(" ").slice(1, 5).join(" ")
    let lastState = this.state.queries
    lastState.push(ob)
    this.setState({
      "queries": lastState
    })
  }

  toggle(category, target) {
    console.log(category, target)
    if (category === "month") {
      Object.keys(this.state.dataPoints).map((year) => {
        this.state.dataPoints[year].values[target].display = !this.state.dataPoints[year].values[target].display
      })

      this.setState(this.state)
    } else {
      this.state.dataPoints[target].display = !this.state.dataPoints[target].display
      this.setState(this.state)
    }

  }

  render() {

    console.log(this.state)

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
                <Route path="/" exact component={ () => <div className="row"><Graph global={ this.state.dataPoints } saveQuery={ (ob) => this.saveQuery.bind(this, ob) } toggle={ (a, b) => this.toggle.bind(this, a, b) } /></div> } />
                <Route path="/map/" component={ () => <div className="row"><h2 className="center-align">Resource Availability</h2><ResourceMap /></div> } />
                <Route path="/saved/" component={ () => <div className="row"><h2 className="center-align">All of Your Queries in One Place</h2><QPanel queries={ this.state.queries } /></div> } />
                <Route path="/upload/" component={ () => <UploadComponent /> } />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
