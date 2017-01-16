import * as APIUtil from '../util/photos_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotos = (filters) => dispatch => (
  APIUtil.fetchPhotos(filters).then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(newPhoto => dispatch(receivePhoto(newPhoto)))
);

export const deletePhoto = id => dispatch => (
  APIUtil.deletePhoto(id).then(photo => dispatch(removePhoto(photo)))
);
