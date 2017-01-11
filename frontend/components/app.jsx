import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    { children }
  </div>
);

export default App;
