import React from 'react';
import PhotosItem from './photos_item';

class Photos extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos({id: this.props.userId});
  }
  render() {
    return(
      <ul className='photos-list'>
        { this.props.photos.reverse().map(photo => <PhotosItem key={photo.id} photo={photo} deletePhoto={this.props.deletePhoto} />) }
      </ul>
    );
  }
}

export default Photos;
