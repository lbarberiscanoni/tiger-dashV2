import React, { Component } from 'react';
import {Line as LineChart, Bar as BarChart, Pie as PieChart, Radar as RadarChart} from 'react-chartjs';
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
		let vals = this.props.dataPoints.datasets[0].data; 

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
			"chartOptions": {
				"line": <LineChart data={this.props.dataPoints} options={null} height="300px" width="500px" />,
				"bar": <BarChart data={this.props.dataPoints} options={null} height="300px" width="500px" />,
				"radar": <RadarChart data={this.props.dataPoints} options={null} height="300px" width="500px" />
			}
		}
	}

	changeChart(newChartType) {
		this.setState({
			"chartType": newChartType
		})
	}

	render() {

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
									this.props.dataPoints.labels.map(x => {
										return <div key={ x }>
											<label>
												<input type="checkbox" className="filled-in" defaultChecked />
												<span>{ x }</span>
											</label>
										</div>
									})
								}
							</div>
							<div className="col s4 m4 l4">
								{
									this.props.dataPoints.datasets.map(x => {
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
						{ this.state.chartOptions[this.state.chartType] }	
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
						<button className="btn waves-effect waves-light"> 
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

	render() {

		return(
			<ChartContainer dataPoints={ this.state }></ChartContainer>
		)
	}
}

export default Graph