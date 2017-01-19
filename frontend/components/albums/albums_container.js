import { connect } from 'react-redux';
import Albums from './albums';
import { fetchAlbums, createAlbum, deleteAlbum } from '../../actions/album_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photos).map(id => state.photos[id]),
  albums: Object.keys(state.albums).map(id => state.albums[id]),
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  createAlbum: album => dispatch(createAlbum(album)),
  deleteAlbum: album => dispatch(deleteAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
