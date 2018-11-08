import React, { Component } from 'react';
import {Line as LineChart, Bar as BarChart} from 'react-chartjs';

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
			<div>
				<form>
					{
						this.state.labels.map(x => {
							return <label><input type="checkbox" /><span>{ x }</span></label>
						})
					}
				</form>
				<LineChart data={this.state} options={null} width="600" height="250"/>
				<BarChart data={this.state} options={null} width="600" height="250"/>
			</div>
		)
	}
}

export default TestChart