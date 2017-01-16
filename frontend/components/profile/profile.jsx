import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import PhotoStreamContainer from './photo_stream_container';
import PhotosContainer from './photos_container';
// import AlbumsContainer from './albums_container';

class Profile extends React.Component{

  render() {
    let path = this.props.location.pathname;
    let chosenContainer = <PhotoStreamContainer/>;
    // debugger;
    if (path.substr(path.length - 6) === 'photos') {
      chosenContainer = <PhotosContainer/>;
    } else if (path.substr(path.length - 6) === 'albums') {
      chosenContainer = <AlbumsContainer/>;
    } else {
      chosenContainer = <PhotoStreamContainer/>;
    }

    return(
      <section>
        <ProfileHeaderContainer />
        {chosenContainer}
      </section>


    );
  }
}

export default Profile;
