import React from 'react';
import StatusContainer from './status/status_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Timeless</h1>
      </Link>
      <StatusContainer />
    </header>
    { children }
  </div>
);

export default App;
