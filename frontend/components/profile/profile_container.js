import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';

 const mapStateToProps = (state, ownProps) => ({
   currentUser: state.session.currentUser,
   photos: Object.keys(state.photos).map(id => state.photos[id]),
   userId: ownProps.params.userId,
   user: state.user
 });

 const mapDispatchToProps = dispatch => ({
   fetchPhotos: () => dispatch(fetchPhotos()),
   fetchPhoto: id => dispatch(fetchPhoto(id)),
   fetchUser: id => dispatch(fetchUser(id))
 });

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Profile);
