import React from 'react';
import { Link } from 'react-router';

const PhotoIndexItem = ({ photo }) => (
  <div className='photo-grid'>
    <h4>User Id: {photo.user_id}</h4>
    <img src={photo.image_url} />
    <h5>{photo.title} - {photo.description}</h5>
  </div>
);

export default PhotoIndexItem;
