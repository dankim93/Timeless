import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import PhotoStreamContainer from './photo_stream_container';
import PhotosContainer from './photos_container';
// import AlbumsContainer from './albums_container';

class Profile extends React.Component{

  render() {
    debugger
    return(
      <section>
        <ProfileHeaderContainer />
        <PhotoStreamContainer />
      </section>


    );
  }
}

export default Profile;
