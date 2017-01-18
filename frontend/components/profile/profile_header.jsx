import React from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import PhotoImageForm from '../photos/photo_image_form';
import PhotoUploadForm from '../photos/photo_upload_form';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

// import PhotoIndexContainer from '../photos/photo_index_container';

class ProfileHeader extends React.Component{
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   title: '',
    //   description: '',
    //   image_url: '',
    //   user_id: this.props.currentUser.id
    // };
    // }
    constructor(props) {
      super(props);
      this.state = { modalOpen: false };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      if (this.props.user) {
        this.setState({ modalOpen: true });
      }
    }

    closeModal() {
      this.setState({ modalOpen: false });
    }

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
          <Link to={`/users/${this.props.user.id}/photos`}>PHOTOS</Link>
          <Link to={`/users/${this.props.user.id}`}>PHOTOSTREAM</Link>
          <Link>ALBUMS</Link>
          <button className="upload-button" onClick={this.openModal}>Upload</button>
          <Modal
            contentLabel=''
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}>

            <div className='upload-modal'>
              <PhotoUploadForm currentUser={this.props.currentUser}
                createPhoto={this.props.createPhoto} />
              <Link onClick={this.closeModal}>close</Link>
            </div>
          </Modal>
        </div>
      </section>


    );
  }
}

export default ProfileHeader;
