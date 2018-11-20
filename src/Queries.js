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
		console.log(this.state)
		let graphNow
		if (this.state.currentGraph.graphType === "line") {
			graphNow = <LineChart data={ this.state.currentGraph.graphData } options={null} height="300px" width="500px" />
		} else if (this.state.currentGraph.graphType === "bar") {
			graphNow = <BarChart data={ this.state.currentGraph.graphData } options={null} height="300px" width="500px" />
		} else if (this.state.currentGraph.graphType === "radar") {
			graphNow =  <RadarChart data={ this.state.currentGraph.graphData } options={null} height="300px" width="500px" />
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
									<button className="btn-large" graphtype={ x.graphType } date={ x.date } onClick={ this.updateGraph.bind(this, x) } > { x.graphType + " graph saved on " + x.date } </button>
								</li>
							</ul>
						})
					}
				</div>
				<div className="col s6 m6 l6">
					<h4 className="center-align"> { this.state.currentGraph.graphType + " graph saved on " + this.state.currentGraph.date } </h4>
					{ graphNow }
				</div>
			</div>
		)
	}
}

export default QPanel