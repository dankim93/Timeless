import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../photos/modal_style';
import CommentContainer from '../photos/comment/comment_container';


class PhotosItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return(
      <div className='small-image'>
        <img onClick={this.openModal} className='photos-image' src={this.props.photo.image_url}/>

        <Modal
          contentLabel=''
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>

          <div className='modal-top'>
            <p><img src={this.props.photo.image_url} /></p>
            <p><button onClick={this.closeModal}>close</button></p>
          </div>
          <div>
            <CommentContainer photoId={this.props.photo.id}/>
          </div>
          
        </Modal>

    </div>

    );
  }
}

export default PhotosItem;
