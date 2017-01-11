import React from 'react';
import StatusContainer from './status/status_container';

const App = ({ children }) => (
  <div>
    <h1>Timeless</h1>
    <StatusContainer />
    { children }
  </div>
);

export default App;
