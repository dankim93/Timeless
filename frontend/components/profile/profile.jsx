import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import PhotoStreamContainer from './photo_stream_container';
import PhotosContainer from './photos_container';
// import AlbumsContainer from './albums_container';

class Profile extends React.Component{
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }


  render() {
    // debugger
    let path = this.props.location.pathname;
    let chosenContainer = <PhotoStreamContainer userId={this.props.userId}/>;
    // debugger;
    if (path.substr(path.length - 6) === 'photos') {
      chosenContainer = <PhotosContainer userId={this.props.userId}/>;
    } else if (path.substr(path.length - 6) === 'albums') {
      chosenContainer = <AlbumsContainer/>;
    } else {
      chosenContainer = <PhotoStreamContainer userId={this.props.userId}/>;
    }

    return(
      <section>
        <ProfileHeaderContainer userId={this.props.userId} user={this.props.user} />
        {chosenContainer}
      </section>


    );
  }
}

export default Profile;
