import React from 'react';
// import PhotoIndexItem from './photo_index_item';

class Profile extends React.Component{
  componentDidMount() {
    this.props.fetchPhotos();
  }
  render() {
    return(
        <img src={'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484528887/profileheader.jpg'} />
        
    );
  }
}

export default Profile;
