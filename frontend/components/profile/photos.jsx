import React from 'react';
import PhotosItem from './photos_item';

class Photos extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos();
  }
  render() {
    return(
      <ul className='photos-list'>
        { this.props.photos.reverse().map(photo => <PhotosItem key={photo.id} photo={photo} />) }
      </ul>
    );
  }
}

export default Photos;
