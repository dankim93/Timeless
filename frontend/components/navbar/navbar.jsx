import React from 'react';
import { Link } from 'react-router';


const sessionLinks = () => (
  <navbar className='out'>
    <Link to="/" className="logo-link">
      <h1 className='logo'>Timeless</h1>
    </Link>
    <nav className='login-signup'>
      <Link to="/login" >Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </navbar>
);


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

const Navbar = ({ currentUser, logout }) => (
  currentUser ? personalStatus(currentUser, logout) : sessionLinks()
);

export default Navbar;
