import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photos).map(id => state.photos[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
