import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
