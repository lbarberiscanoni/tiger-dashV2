import React, { Component } from 'react';
import {Line as LineChart, Bar as BarChart, Pie as PieChart, Radar as RadarChart} from 'react-chartjs';

class QPanel extends Component {

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
					date: "2018-11-03"
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
			], 
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