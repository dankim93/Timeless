import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser,
});

export default connect(
  mapStateToProps
)(Splash);
