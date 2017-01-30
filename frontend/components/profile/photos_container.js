import { connect } from 'react-redux';
import Photos from './photos';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photos).map(id => state.photos[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (data) => dispatch(fetchPhotos(data)),
  deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
