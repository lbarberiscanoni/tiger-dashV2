import React, { Component } from 'react';
import {Line as LineChart, Bar as BarChart} from 'react-chartjs';

class ChartContainer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col s6 m6 l6">
				<div className="col s12 m12 l12">
					<form>
						{ this.props.children }
					</form>
				</div>
				<div className="col s12 m12 l12">
					{ this.props.chart }
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

class TestChart extends Component {

	constructor(props) {
		super(props);
		this.state = {
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [
		        {
		            label: "My First dataset",
		            fill: false,
		            pointHoverRadius: 5,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [65, 59, 80, 81, 56, 55, 40],
		            spanGaps: false,
		        }
			]
		}
	}

	render() {

		return(
			<div className="row">
				<ChartContainer chart={ <LineChart data={this.state} options={null} height="300px" width="500px" /> }>
					{
						this.state.labels.map(x => {
							return <div>
								<label>
									<input type="checkbox" />
									<span>{ x }</span>
								</label>
							</div>
						})
					}
				</ChartContainer>
				<ChartContainer chart={ <BarChart data={this.state} options={null} height="300px" width="500px" /> }>
					{
						this.state.labels.map(x => {
							return <div>
								<label>
									<input type="checkbox" />
									<span>{ x }</span>
								</label>
							</div>
						})
					}
				</ChartContainer>
			</div>
		)
	}
}

export default TestChart