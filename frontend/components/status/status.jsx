import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav>
    <Link to="/login" >Login</Link>
    <Link to="/signup">Sign up</Link>
  </nav>
);

const personalStatus = (currentUser, logout) => (
	<nav>
    <h2 >Welcome, {currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
	</nav>
);

const Status = ({ currentUser, logout }) => (
  currentUser ? personalStatus(currentUser, logout) : sessionLinks()
);

export default Status;
