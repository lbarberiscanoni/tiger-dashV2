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

	render() {
		return(
			<FileInput multiple accept='csv/*' uploader={ uploader }>
				<span className="btn">Choose Files</span>
			</FileInput>
		)
	}
} 

export default UploadComponent