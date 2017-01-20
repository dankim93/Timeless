import React from 'react';
import PhotoIndexContainer from '../photos/photo_index_container';
import { Link } from 'react-router';

class Splash extends React.Component {

  render(){
    return(
      <div>
        <div className='splash'>
          <div>
            <h2 className='phrase'>Home of millions of pixels</h2>
            <br/>
            <Link to='/login'>Start Exploring</Link>
          </div>
        </div>
        <PhotoIndexContainer />
      </div>

    );
  }
}

export default Splash;
