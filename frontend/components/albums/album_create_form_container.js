import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
import AlbumCreateForm from './album_create_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
