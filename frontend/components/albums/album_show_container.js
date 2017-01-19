import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  albums: Object.keys(state.albums).map(id => state.albums[id]),
  // albumId: ownProps.params.albumId,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
