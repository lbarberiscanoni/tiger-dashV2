import React, { Component } from 'react';
import M from 'materialize-css';

import FileInput from 'react-fine-uploader/file-input'
import FineUploaderTraditional from 'fine-uploader-wrappers'

class UploadComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			"status": false
		}
	}

	componentDidMount() {
		M.AutoInit();
	}

	render() {
		let uploader = new FineUploaderTraditional({
		   options: {
		      request: {
		         endpoint: 'upload/'
		      },
		      callbacks: {
		         onComplete: (id, name, response) => {
		            this.setState({
		            	"status": !this.state.status
		            })
		         }
		      }
		   }
		})

		return(
			<div className="row">
				<h2 className="center-align">
					{ this.state.status ? "File Uploaded!" : "Upload New Data to the App" }
				</h2>
				<div className="container">
					<div className="col s4 m4 l4"></div>
					<div className="col s4 m4 l4">
						<FileInput multiple accept='csv/*' uploader={ uploader }>
							<span className="btn-large">
								<i class="material-icons left">cloud</i>
								{
									this.state.status ? "Upload Another" : "Choose File"
								}
							</span>
						</FileInput>
					</div>
					<div className="col s4 m4 l4"></div>
				</div>
			</div>
		)
	}
} 

export default UploadComponent