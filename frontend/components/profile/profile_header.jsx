import React from 'react';
import { Link } from 'react-router';
// import PhotoIndexContainer from '../photos/photo_index_container';

class ProfileHeader extends React.Component{

  render() {
    return(
      <section>
        <div className='header-image'>
          <img src="http://res.cloudinary.com/dyjarpgbt/image/upload/v1484528887/profileheader.jpg"></img>
        </div>
        <div className='header-info'>
          <img className='profile-image' src={this.props.user.profile_url}></img>
          <h2 className='profile-name'>{this.props.user.username}</h2>
        </div>
        <div className='tab-bar'>
          <Link to={`/users/${this.props.userId}/photos`}>PHOTOS</Link>
          <Link to={`/users/${this.props.userId}`}>PHOTOSTREAM</Link>
          <Link>ALBUMS</Link>
        </div>
      </section>


    );
  }
}

export default ProfileHeader;
