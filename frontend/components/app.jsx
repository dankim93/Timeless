import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Footer from './splash/footer';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className='app'>
    <NavbarContainer />
    { children }
    <Footer />
  </div>
);

export default App;
