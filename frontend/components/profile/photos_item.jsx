import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

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
          onRequestClose={this.closeModal}>

          <div className='modal-top'>
            <img src={this.props.photo.image_url} />
            <p><button onClick={this.closeModal}>close</button></p>
          </div>

        </Modal>

    </div>

    );
  }
}

export default PhotosItem;
