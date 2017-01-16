import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM
} from '../actions/album_actions';
import merge from 'lodash/merge';

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    case REMOVE_ALBUM:
      delete newState[action.album.id];
      return newState;
    default:
      return state;
  }
};

export default AlbumsReducer;
