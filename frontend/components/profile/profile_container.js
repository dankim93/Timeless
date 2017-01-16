import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

 const mapStateToProps = state => ({
   currentUser: state.session.currentUser,
   photos: Object.keys(state.photos).map(id => state.photos[id])
 });

 const mapDispatchToProps = dispatch => ({
   fetchPhotos: () => dispatch(fetchPhotos()),
   fetchPhoto: id => dispatch(fetchPhoto(id))
 });

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Profile);
