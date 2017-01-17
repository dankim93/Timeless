import React from 'react';
import PhotoIndexItem from './photo_index_item';
import PhotoImageForm from './photo_image_form';

class PhotoIndex extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }
  render() {
    return(
      <ul className='photo-list'>
        { this.props.photos.reverse().map(photo => <PhotoIndexItem key={photo.id} photo={photo} />) }
        <PhotoImageForm />
      </ul>
    );
  }
}

export default PhotoIndex;
