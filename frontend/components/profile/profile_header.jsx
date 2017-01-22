import React from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import PhotoImageForm from '../photos/photo_image_form';
import PhotoUploadForm from '../photos/photo_upload_form';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

// import PhotoIndexContainer from '../photos/photo_index_container';

class ProfileHeader extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        modalOpen: false,
        toggle1: '',
        toggle2: 'toggle',
        toggle3: ''};
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
      this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick1() {
      this.setState({
        toggle1: 'toggle',
        toggle2: '',
        toggle3: ''});
    }

    handleClick2() {
      this.setState({
        toggle1: '',
        toggle2: 'toggle',
        toggle3: ''});
    }

    handleClick3() {
      this.setState({
        toggle1: '',
        toggle2: '',
        toggle3: 'toggle'});
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
          <Link to={`/users/${this.props.user.id}/photos`} className={this.state.toggle1} onClick={this.handleClick1}>PHOTOS</Link>
          <Link to={`/users/${this.props.user.id}`} className={this.state.toggle2} onClick={this.handleClick2}>PHOTOSTREAM</Link>
          <Link to={`/users/${this.props.user.id}/albums`} className={this.state.toggle3} onClick={this.handleClick3}>ALBUMS</Link>
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
