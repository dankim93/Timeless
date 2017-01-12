import React from 'react';
import { Link } from 'react-router';
// import { login } from '../../actions/session_actions';

const guest = { user: {username: 'guest', password: 'password'}};

const sessionLinks = (login) => (
  <navbar className='out'>
    <Link to="/" className="logo-link">
      <h1 className='logo'>Timeless</h1>
    </Link>
    <nav className='login-signup'>
      <Link to="/login" >Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <button onClick={() => login(guest)}>Guest</button>
    </nav>
  </navbar>
);

// const loginGuest = (login) => {
//   const guest = { user: {username: 'username', password: 'password'}};
//   debugger;
//   login(guest);
// };

const personalStatus = (currentUser, logout) => (
  <navbar className='in'>
    <Link to="/" className="logo-link">
      <h1 className='logo'>Timeless</h1>
    </Link>
  	<nav className='login-signup'>
      <h2 >Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
  	</nav>
  </navbar>
);

const Navbar = ({ currentUser, logout, login }) => (
  currentUser ? personalStatus(currentUser, logout) : sessionLinks(login)
);

export default Navbar;
