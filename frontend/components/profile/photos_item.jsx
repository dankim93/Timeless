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

          <section>
            <p className='exit-button'><button onClick={this.closeModal}>close</button></p>
            <div className='modal-top'>
              <img src={this.props.photo.image_url} />
            </div>
            <div className='commentbox'>
              <CommentContainer photoId={this.props.photo.id}/>
            </div>
          </section>

        </Modal>

    </div>

    );
  }
}

export default PhotosItem;
