import React from 'react';
import { Link } from 'react-router';
// import { login } from '../../actions/session_actions';

const guest = { user: {username: 'username', password: 'password'}};

const sessionLinks = (login) => (
  <div className='navbar'>
    <Link to="/" className="logo-link">
      <h1 className='logo'>Timeless</h1>
    </Link>
    <nav className='login-signup'>
      <ul>
        <li><Link to="/login" >Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><button onClick={() => login(guest)}>Guest</button></li>
      </ul>
    </nav>
  </div>
);

// const loginGuest = (login) => {
//   const guest = { user: {username: 'username', password: 'password'}};
//   debugger;
//   login(guest);
// };

const personalStatus = (currentUser, logout) => (
  <div className='navbar'>
    <Link to="/" className="logo-link">
      <h1 className='logo'>Timeless</h1>
    </Link>
  	<nav className='login-signup'>
      <h2 >Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
  	</nav>
  </div>
);

const Navbar = ({ currentUser, logout, login }) => (
  currentUser ? personalStatus(currentUser, logout) : sessionLinks(login)
);

export default Navbar;
