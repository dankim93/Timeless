import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos();
  }
  render() {
    return(
      <ul className='photo-list'>
        { this.props.photos.reverse().map(photo => <PhotoIndexItem key={photo.id} photo={photo} />) }
      </ul>
    );
  }
}

export default PhotoIndex;
