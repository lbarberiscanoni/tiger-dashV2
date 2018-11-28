import React, { Component } from 'react';
import M from 'materialize-css';
import {Line as LineChart, Bar as BarChart, Pie as PieChart, Radar as RadarChart} from 'react-chartjs';
import Chart from "chart.js";
import * as math from 'mathjs';


class Analysis extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		M.AutoInit();
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

		let possibleLabels = this.props.global[Object.keys(this.props.global)[0]].values
		let labels = []
		Object.keys(possibleLabels).map((x) => {
			if (possibleLabels[x].display === true) {
				labels.push(x)
			}
		})

		let dataPoints = {
			"possibleLabels": possibleLabels,
			"labels": labels,
			"datasets": [], 
		}


		let color = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
		let i = 0
		Object.keys(this.props.global).map((year) => {
			if (this.props.global[year].display === true) {
				let relevantVals = []
				Object.keys(this.props.global[year].values).map((val) => {
					if (this.props.global[year].values[val].display === true) {
						relevantVals.push(this.props.global[year].values[val].data)
					}
				})

				let colorString 
				let newColor = []
				if (i < 1) {
					colorString = "rgba(" + color.join(",") + ", .5)"
				} else {
					color.map((x) => {
						let complement = color.sort()[1] + color.sort()[color.length - 1]
						newColor.push(complement - x)
					})
					colorString = "rgba(" + newColor.join(",") + ", .8)"
				}

				dataPoints["datasets"].push(
					{
						label: year,
						fillColor: colorString, 
						strokeColor: colorString, 
						pointColor: colorString, 
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "#fff",
						pointHoverRadius: 5,
						pointRadius: 1,
						pointHitRadius: 10,
						spanGaps: false, 
						data: relevantVals,
						
					}
				)

				i += 1
			}
		})

		this.state = {
			"chartType": this.props.chartType,
			"dataPoints": dataPoints,
		}

	}

	componentDidMount() {
		M.AutoInit();
	}

	render() {
		let MyChart

		console.log(this.state)

		if (this.state.chartType === "line") {
			MyChart = <LineChart data={ this.state.dataPoints } height="300px" width="600px" />
		} else if (this.state.chartType === "bar") {
			MyChart = <BarChart data={ this.state.dataPoints } height="300px" width="600px" />
		} else if (this.state.chartType === "radar") {
			MyChart = <RadarChart data={ this.state.dataPoints } height="300px" width="600px" />
		}

		return (
			<div>
				<div className="col s3 m3 l3"></div>
				<div className="col s6 m6 l6">
					<div className="row">
						<div className="col s12 m12 l12 center-align">
							<a href="#" className="dropdown-trigger btn" data-target="dropdown">Chart Type</a>
							<ul id="dropdown" className="dropdown-content">
								<li onClick={ this.props.toggle("chart", "line") }>
									<a href='#'>
										Line
										<i className="material-icons right">show_chart</i>
									</a>
								</li>
								<li className="divider"></li>
								<li onClick={ this.props.toggle("chart", "bar") }>
									<a href='#'>
										Bar
										<i className="material-icons right">insert_chart</i>
									</a>
								</li>
								<li className="divider"></li>
								<li onClick={ this.props.toggle("chart", "radar") }>
									<a href='#'>
										Radar
										<i className="material-icons right">bubble_chart</i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m12 l12">
							<form>
								<div className="col s4 m4 l4">
									{
										Object.keys(this.state.dataPoints.possibleLabels).map(x => {
											return <div key={ x }>
												<label>
													<input type="checkbox" className="filled-in" defaultChecked={ this.state.dataPoints.possibleLabels[x].display } onClick={ this.props.toggle("month", x) } />
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
										<Analysis dataPoints={ this.state.dataPoints } />
									</div>
								</li>
							</ul>
						</div>
						<div className="col s1 m1 l1"></div>
					</div>
					<div className="row">
						<div className="col s4 m4 l4"></div>
						<div className="col s4 m4 l4">
							<button className="btn waves-effect waves-light" onClick={ this.props.saveQuery(this.state) } > 
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