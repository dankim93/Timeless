import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Navbar from './navbar';
import { hashHistory } from 'react-router';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(hashHistory.push('/')),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
