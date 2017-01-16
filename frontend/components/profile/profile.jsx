import React from 'react';
import ProfileHeaderContainer from './profile_header_container';

class Profile extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos();
  }
  render() {
    return(
      <section>
        <ProfileHeaderContainer />
      </section>


    );
  }
}

export default Profile;
