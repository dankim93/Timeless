import React from 'react';
import { Link } from 'react-router';

class ProfileHeader extends React.Component{

  render() {
    return(
      <section>
        <div className='header-image'>
          <img src="http://res.cloudinary.com/dyjarpgbt/image/upload/v1484528887/profileheader.jpg"></img>
        </div>
        <div className='header-info'>
          <img className='profile-image' src={this.props.currentUser.profile_url}></img>
          <h2 className='profile-name'>{this.props.currentUser.username}</h2>
        </div>
        <div className='tab-bar'>
          <Link>PHOTOS</Link>
          <Link>PHOTOSTREAM</Link>
          <Link>ALBUMS</Link>
        </div>
      </section>


    );
  }
}

export default ProfileHeader;
