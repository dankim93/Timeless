import React from 'react';
import { Link } from 'react-router';

const PhotoIndexItem = ({ photo }) => (
  <div className='photo-grid'>
    <img src={photo.image_url} />
  </div>
);
