import React, { Component } from 'react';
import {Line as LineChart, Bar as BarChart, Pie as PieChart, Radar as RadarChart} from 'react-chartjs';
import Chart from "chart.js";
import * as math from 'mathjs';

class DropDown extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		
		return(
			<div className="col s12 m12 l12 center-align">
				<a className="dropdown-trigger btn" data-target="dropdown">Chart Type</a>
				<ul id="dropdown" className="dropdown-content">
					<li onClick={ this.props.changeChart("line") }>
						<a>
							Line
							<i className="material-icons right">show_chart</i>
						</a>
					</li>
					<li className="divider"></li>
					<li onClick={ this.props.changeChart("bar") }>
						<a>
							Bar
							<i className="material-icons right">insert_chart</i>
						</a>
					</li>
					<li className="divider"></li>
					<li onClick={ this.props.changeChart("radar") }>
						<a>
							Radar
							<i className="material-icons right">bubble_chart</i>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

class Analysis extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let vals = this.props.dataPoints.raw_data.datasets[0].data; 

		return(
			<table className="highlight striped">
				<thead>
					<tr>
						<th>Measure</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Mean</th>
						<td> { math.round(math.mean(vals), 2) } </td>
					</tr>
					<tr>
						<th>Median</th>
						<td> { math.round(math.median(vals), 2) } </td>
					</tr>
					<tr>
						<th>Standard Deviation</th>
						<td> { math.round(math.std(vals), 2) } </td>
					</tr>
					<tr>
						<th>Max</th>
						<td> { math.round(math.max(vals), 2) } </td>
					</tr>
					<tr>
						<th>Min</th>
						<td> { math.round(math.min(vals), 2) } </td>
					</tr>
				</tbody>
			</table>
		)
	}
}

class ChartContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"chartType": "line",
		}
	}

	changeChart(newChartType) {
		this.setState({
			"chartType": newChartType
		})
	}

	render() {

		let MyChart

		if (this.state.chartType === "line") {
			MyChart = <LineChart data={ this.props.dataPoints.raw_data }height="300px" width="500px" />
		} else if (this.state.chartType === "bar") {
			MyChart = <BarChart data={ this.props.dataPoints.raw_data } height="300px" width="500px" />
		} else if (this.state.chartType === "radar") {
			MyChart = <RadarChart data={ this.props.dataPoints.raw_data } height="300px" width="500px" />
		}

		return (
			<div className="col s6 m6 l6">
				<div className="row">
					<DropDown changeChart={ (a) => this.changeChart.bind(this, a) } />
				</div>
				<div className="row">
					<div className="col s12 m12 l12">
						<form>
							<div className="col s4 m4 l4">
								{
									this.props.dataPoints.original.labels.map(x => {
										return <div key={ x }>
											<label>
												<input type="checkbox" className="filled-in" defaultChecked onClick={ this.props.toggleMonth(x) }/>
												<span>{ x }</span>
											</label>
										</div>
									})
								}
							</div>
							<div className="col s4 m4 l4">
								{
									this.props.dataPoints.original.datasets.map(x => {
										return <div key={ x["label"] }>
											<label>
												<input type="checkbox" defaultChecked />
												<span>{ x["label"] }</span>
											</label>
										</div>
									})
								}
							</div>
							<div className="col s4 m4 l4">
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m12 l12">
						{ MyChart }
					</div>
				</div>
				<div className="row">
					<div className="col s3 m3 l3"></div>
					<div className="col s6 m6 l6">
						<ul className="collapsible">
							<li>
								<div className="collapsible-header">
									REPORT
									<i className="material-icons right">subject</i>
								</div>
								<div className="collapsible-body">
									<Analysis dataPoints={this.props.dataPoints} />
								</div>
							</li>
						</ul>
					</div>
					<div className="col s3 m3 l3"></div>
				</div>
				<div className="row">
					<div className="col s4 m4 l4"></div>
					<div className="col s4 m4 l4">
						<button className="btn waves-effect waves-light" onClick={ () => { alert("saved!") } } > 
							SAVE
							<i className="material-icons right">save</i>
						</button>
					</div>
					<div className="col s4 m4 l4"></div>
				</div>
			</div>
		)
	}
}

class Graph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"original": {
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
			        }, 
			        {
			            label: "2016",
			            fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
			            pointHoverRadius: 5,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [65, 20, 40, 21, 36, 15, 20],
			            spanGaps: false,
			        }
				]
			},
			"raw_data": {
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
			        }, 
			        {
			            label: "2016",
			            fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
			            pointHoverRadius: 5,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [65, 20, 40, 21, 36, 15, 20],
			            spanGaps: false,
			        }
				]
			}
		}
	}

	toggleMonth(month) {
		let raw_labels = this.state.raw_data.labels
		let index = this.state.raw_data.labels.indexOf(month)
		let newStuff = []

		if (index > -1) {
			console.log("remove")
			raw_labels.splice(index, 1)

			this.state.raw_data.datasets.map(x => {
				x["data"].splice(index, 1)
				newStuff.push(x)
			})
		} else {
			console.log('add')
			raw_labels.push(month)

			let newLabels = this.state.original.labels.filter(label => raw_labels.includes(label) )

			raw_labels = newLabels

			let dataPointIndex = this.state.original.labels.indexOf(month)

			for (let i = 0; i < this.state.original.datasets.length; i++) {
				let val = this.state.original.datasets[i]["data"][dataPointIndex]
				this.state.raw_data.datasets[i]["data"].splice(newLabels.indexOf(month), 0, val)
				console.log(this.state.raw_data.datasets[i])
				newStuff.push(this.state.raw_data.datasets[i])
			}

			console.log(newStuff)
		}

		this.setState({
			"raw_data": {
				"labels": raw_labels,
				"datasets": newStuff
			}
		})



		console.log(this.state)
	}

	render() {

		return(
			<ChartContainer dataPoints={ this.state } toggleMonth = { (month) => this.toggleMonth.bind(this, month) }></ChartContainer>
		)
	}
}

export default Graph