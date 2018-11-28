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
				<a href="#" className="dropdown-trigger btn" data-target="dropdown">Chart Type</a>
				<ul id="dropdown" className="dropdown-content">
					<li onClick={ this.props.changeChart("line") }>
						<a href='#'>
							Line
							<i className="material-icons right">show_chart</i>
						</a>
					</li>
					<li className="divider"></li>
					<li onClick={ this.props.changeChart("bar") }>
						<a href='#'>
							Bar
							<i className="material-icons right">insert_chart</i>
						</a>
					</li>
					<li className="divider"></li>
					<li onClick={ this.props.changeChart("radar") }>
						<a href='#'>
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

		return(
			<table className="highlight striped">
				<thead>
					<tr>
						<th></th>
						<th>Mean</th>
						<th>Median</th>
						<th>Standard Deviation</th>
						<th>Max</th>
						<th>Min</th>
					</tr>
				</thead>
				<tbody>
					{ 
						this.props.dataPoints.datasets.map(x => {
							return <tr>
								<th>{ x.label } </th>
								<td> { math.round(math.mean(x.data), 2) } </td>
								<td> { math.round(math.median(x.data), 2) } </td>
								<td> { math.round(math.std(x.data), 2) } </td>
								<td> { math.round(math.max(x.data), 2) } </td>
								<td> { math.round(math.min(x.data), 2) } </td>
							</tr>
						})
					}
				</tbody>
			</table>
		)
	}
}

class Graph extends Component {

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


		let possibleLabels = this.props.global[Object.keys(this.props.global)[0]].values
		let labels = []
		Object.keys(possibleLabels).map((x) => {
			if (possibleLabels[x].display === true) {
				labels.push(x)
			}
		})

		let dataPoints = {
			"labels": labels,
			"datasets": []
		}

		Object.keys(this.props.global).map((year) => {
			if (this.props.global[year].display === true) {
				let relevantVals = []
				Object.keys(this.props.global[year].values).map((val) => {
					if (this.props.global[year].values[val].display === true) {
						relevantVals.push(this.props.global[year].values[val].data)
					}
				})
				dataPoints["datasets"].push(
					{
						label: year, 
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						pointHoverRadius: 5,
						pointRadius: 1,
						pointHitRadius: 10,
						spanGaps: false, 
						data: relevantVals,
					}
				)
			}
		})

		if (this.state.chartType === "line") {
			MyChart = <LineChart data={ dataPoints } height="300px" width="600px" />
		} else if (this.state.chartType === "bar") {
			MyChart = <BarChart data={ dataPoints } height="300px" width="600px" />
		} else if (this.state.chartType === "radar") {
			MyChart = <RadarChart data={ dataPoints } height="300px" width="600px" />
		}

		return (
			<div>
				<div className="col s3 m3 l3">
					<button onClick={ this.props.toggle("month", "April") }>Test</button>
				</div>
				<div className="col s6 m6 l6">
					<div className="row">
						<DropDown changeChart={ (a) => this.changeChart.bind(this, a) } />
					</div>
					<div className="row">
						<div className="col s12 m12 l12">
							<form>
								<div className="col s4 m4 l4">
									{
										Object.keys(possibleLabels).map(x => {
											return <div key={ x }>
												<label>
													<input type="checkbox" className="filled-in" defaultChecked={ possibleLabels[x].display } onClick={ this.props.toggle("month", x) } />
													<span>{ x }</span>
												</label>
											</div>											
										})
									}
								</div>
								<div className="col s4 m4 l4">
									{
										Object.keys(this.props.global).map(x => {
											return <div key={ x }>
												<label>
													<input type="checkbox" defaultChecked={ this.props.global[x].display } onClick={ this.props.toggle("year", x) } />
													<span>{ x }</span>
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
						<div className="col s1 m1 l1"></div>
						<div className="col s10 m10 l10">
							<ul className="collapsible">
								<li>
									<div className="collapsible-header">
										REPORT
										<i className="material-icons right">subject</i>
									</div>
									<div className="collapsible-body">
										<Analysis dataPoints={ dataPoints } />
									</div>
								</li>
							</ul>
						</div>
						<div className="col s1 m1 l1"></div>
					</div>
					<div className="row">
						<div className="col s4 m4 l4"></div>
						<div className="col s4 m4 l4">
							<button className="btn waves-effect waves-light" > 
								SAVE
								<i className="material-icons right">save</i>
							</button>
						</div>
						<div className="col s4 m4 l4"></div>
					</div>
				</div>
				<div className="col s3 m3 l3"></div>
			</div>
		)
	}
}

export default Graph