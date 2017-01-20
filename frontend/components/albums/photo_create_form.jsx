import React from 'react';

class PhotoCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image_url: '',
      user_id: this.props.currentUser.id,
      album_id: this.props.albumId
    };
  }

  handleUpload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if(!error){
        const img = images[0].url;
        this.setState({image_url: img});
      }
    });
  }

  update(prop) {
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
  }

  render() {
    return(
      <form className='upload-form' onSubmit={this.handleSubmit.bind(this)}>

        <input
          className='form-div'
          type='text'
          value={this.state.title}
          placeholder="title"
          onChange={this.update('title')} />

        <input
          type="text"
          value={this.state.description}
          placeholder="description"
          onChange={this.update('description')}/>
          {this.state.image_url === "" ? <button className="splash-button" onClick={this.handleUpload.bind(this)}>Upload Photo</button> :
                                   <img className='image-preview'src={this.state.image_url}/>}
        <button>Submit Photo</button>
      </form>
    );
  }

}

export default PhotoCreateForm;
