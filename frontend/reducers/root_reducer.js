import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import AlbumsReducer from './albums_reducer';
import CommentsReducer from './comments_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  albums: AlbumsReducer,
  comments: CommentsReducer,
  user: UsersReducer
});

export default rootReducer;
