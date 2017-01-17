import { connect } from 'react-redux';
import PhotoStream from './photo_stream';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photos).map(id => state.photos[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (data) => dispatch(fetchPhotos(data)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoStream);
