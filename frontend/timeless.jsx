import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Timeless</h1>, root);
});
