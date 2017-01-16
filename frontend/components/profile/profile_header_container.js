import { connect } from 'react-redux';
import ProfileHeader from './profile_header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(ProfileHeader);
