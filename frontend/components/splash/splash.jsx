import React from 'react';
import PhotoIndexContainer from '../../photos/photo_index_container';

export default class Splash extends React.Component {


  render(){
    return(
      <div>
        <SplashImage />
        <PhotoIndexContainer />
      </div>
    );
  }
}
