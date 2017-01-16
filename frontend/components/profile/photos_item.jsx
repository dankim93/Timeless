import React from 'react';
import { Link } from 'react-router';

const PhotosItem = ({ photo }) => (
  <div className='small-image'>
    <img className='photos-image' src={photo.image_url}/>
  </div>
);

export default PhotosItem;
