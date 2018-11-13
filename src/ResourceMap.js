import React, { Component } from 'react';

import Plot from 'react-plotly.js';

class ResourceMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			major: "chemistry",
			data: [
				{
					"type": "bar",
					"orientation": "h",
					"x": [20, 14],
					"y": ["available", "needed"],
					"category": "chemistry",
					"title": "CHEM 101",
					"marker": {
						"color": '#26a69a'
					}
				},
				{
					"type": "bar",
					"orientation": "h",
					"x": [20, 14],
					"y": ["available", "needed"],
					"category": "history",
					"title": "HIST 102",
					"marker": {
						"color": '#26a69a'
					}
				},
				{
					"type": "bar",
					"orientation": "h",
					"x": [17, 30],
					"y": ["available", "needed"],
					"category": "chemistry",
					"title": "CHEM 201", 
					"marker": {
						"color": '#ee6e73'
					}
				},		
				{
					"type": "bar",
					"orientation": "h",
					"x": [16, 14],
					"y": ["available", "needed"],
					"category": "history",
					"title": "HIST 405",
					"marker": {
						"color": '#26a69a'
					}
				},
				{
					"type": "bar",
					"orientation": "h",
					"x": [17, 30],
					"y": ["available", "needed"],
					"category": "history",
					"title": "HIST 301", 
					"marker": {
						"color": '#ee6e73'
					}
				},				
			]
		}
	}

	render() {

		console.log(this.state.major)
 
		let majorList = []
		this.state.data.map(x => {
			if (majorList.includes(x["category"]) === false) {
				majorList.push(x["category"])	
			}
		})

		return (
			<div className="container">	
				<div className="row">
					<div className="col s12 m12 l12 center-align">
						<a className="dropdown-trigger btn-large" data-target="dropdown">Majors</a>
						<ul id="dropdown" className="dropdown-content">
							{
								majorList.map(x => {
									return <li onClick={ () => this.setState({"major":  x }) }>
										<a> { x } </a>
									</li>
								})
							}
						</ul>
					</div>
				</div>		
				<div className="row">
					{
						this.state.data.map(x => {
							if (x["category"] === this.state.major) {
								return <div className="col s4 m4 l4">
									<Plot data={ [ x ] } layout={{ width: 400, height: 250, bargap: 0.5, "title": x["title"] }}  />
								</div>
							} else {
								return false
							}
						})
					}
				</div>
			</div>
		)
	}
}

export default ResourceMap