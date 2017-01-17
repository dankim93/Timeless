import React from 'react';
import Dropzone from 'react-dropzone';

class PhotoImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        image_url: "",
        photo_id: ""
      }
    };
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if(!error){
        const img = images[0].url;
        this.setState({image_url: img});
      }
    });
  }

  render() {
    return (
      <div className="photo-upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }

}

export default PhotoImageForm;
