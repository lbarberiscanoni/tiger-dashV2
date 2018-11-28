import React, { Component } from 'react';
import {Line as LineChart, Bar as BarChart, Pie as PieChart, Radar as RadarChart} from 'react-chartjs';

class QPanel extends Component {

	constructor(props) {
		super(props)
		this.state = {
			queries: this.props.queries,
			currentGraph: {
				"graphType": "",	
				"date": ""
			}
		}
	}

	updateGraph(a) {
		this.setState({
			"currentGraph": a
		})
	}

	render() {
		let graphNow
		if (this.state.currentGraph.chartType === "line") {
			graphNow = <LineChart data={ this.state.currentGraph.dataPoints } options={null} height="300px" width="500px" />
		} else if (this.state.currentGraph.chartType === "bar") {
			graphNow = <BarChart data={ this.state.currentGraph.dataPoints } options={null} height="300px" width="500px" />
		} else if (this.state.currentGraph.chartType === "radar") {
			graphNow =  <RadarChart data={ this.state.currentGraph.dataPoints } options={null} height="300px" width="500px" />
		} else {
			graphNow = <h3>Your Saved Graph</h3>
		}
		return(
			<div className="container">
				<div className="col s6 m6 l6">
					{
						this.state.queries.map(x => {
							return <ul>
								<li>
									<button className="btn-large" graphtype={ x.chartType } date={ x.date } onClick={ this.updateGraph.bind(this, x) } > { x.chartType + " graph saved on " + x.date } </button>
								</li>
							</ul>
						})
					}
				</div>
				<div className="col s6 m6 l6">
					<h4 className="center-align"> { this.state.currentGraph.date } </h4>
					{ graphNow }
				</div>
			</div>
		)
	}
}

export default QPanel