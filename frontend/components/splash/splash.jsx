import React from 'react';
import PhotoIndexContainer from '../photos/photo_index_container';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div>
          <div className='splash'>
            <div>
              <h2 className='phrase'>Home of millions of pixels</h2>
              <br/>
              <Link to='/login' className='ignore' >Start Exploring</Link>
            </div>
          </div>
          <PhotoIndexContainer />
        </div>
      );
    } else {
      return(
        <div>
          <div className='splash'>
            <div>
              <h2 className='phrase'>Home of millions of pixels</h2>
              <br/>
              <Link to='/login' className='exploring' >Start Exploring</Link>
            </div>
          </div>
          <PhotoIndexContainer />
        </div>
      );
    }
  }
}

export default Splash;
