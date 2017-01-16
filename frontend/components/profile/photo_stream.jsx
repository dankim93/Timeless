import React from 'react';
import PhotoStreamItem from './photo_stream_item';

class PhotoStream extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos();
  }
  render() {
    return(
      <ul className='photo-list'>
        { this.props.photos.reverse().map(photo => <PhotoStreamItem key={photo.id} photo={photo} />) }
      </ul>
    );
  }
}

export default PhotoStream;
