import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import PhotoStreamContainer from './photo_stream_container';
import PhotosContainer from './photos_container';
import AlbumsContainer from '../albums/albums_container';
import AlbumShowContainer from '../albums/album_show_container';

class Profile extends React.Component{
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }


  render() {
    // debugger
    let path = this.props.location.pathname;
    let length = path.length;
    let albumId = parseInt(path[length - 1]);
    let chosenContainer = <PhotoStreamContainer userId={this.props.userId}/>;

    if (path.substr(path.length - 6) === 'photos') {
      chosenContainer = <PhotosContainer userId={this.props.userId}/>;
    } else if (path.includes('albums/')) {
      chosenContainer = <AlbumShowContainer albumId={albumId}/>;
    } else if (path.includes('albums')) {
      chosenContainer = <AlbumsContainer userId={this.props.userId}/>;
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
