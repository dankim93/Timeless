import { connect } from 'react-redux';
import ProfileHeader from './profile_header';
import { createPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
