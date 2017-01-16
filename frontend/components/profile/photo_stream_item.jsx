import React from 'react';
import { Link } from 'react-router';

const PhotoStreamItem = ({ photo }) => (
  <div className='photo-grid'>
    <div className='top-pic'>
      <img className='profile-pic' src={photo.profile_url} />
      <h4 className='photo-username'>{photo.username}</h4>
    </div>
    <div className='bot-pic'>
      <img src={photo.image_url} />
      <li className='photo-title'>
        <h5>{photo.title} - {photo.description}</h5>
      </li>
    </div>
  </div>
);

export default PhotoStreamItem;
