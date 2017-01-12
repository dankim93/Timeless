import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className='app'>
    <NavbarContainer />
    { children }
  </div>
);

export default App;
