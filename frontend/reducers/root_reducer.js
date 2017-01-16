import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import AlbumsReducer from './albums_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  albums: AlbumsReducer
});

export default rootReducer;
