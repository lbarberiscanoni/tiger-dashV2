import React, { Component } from 'react';

import FileInput from 'react-fine-uploader/file-input'
import FineUploaderTraditional from 'fine-uploader-wrappers'

const uploader = new FineUploaderTraditional({
   options: {
      request: {
         endpoint: 'upload/'
      },
      callbacks: {
         onComplete: (id, name, response) => {
            alert("success!")
         }
      }
   }
})

class UploadComponent extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="container">
				<div className="col s4 m4 l4"></div>
				<div className="col s4 m4 l4">
					<FileInput multiple accept='csv/*' uploader={ uploader }>
						<span className="btn-large">
							<i class="material-icons left">cloud</i>
							Choose Files
						</span>
					</FileInput>
				</div>
				<div className="col s4 m4 l4"></div>
			</div>
		)
	}
} 

export default UploadComponent