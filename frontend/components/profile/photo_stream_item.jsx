import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../photos/modal_style';
import CommentContainer from '../photos/comment/comment_container';


class PhotoStreamItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ modalOpen: false });
    document.body.style.overflow = 'auto';
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.deletePhoto(this.props.photo.id);
  }

  render() {
    return(
      <div className='photo-grid'>
        <div className='top-pic'>
          <img className='profile-pic' src={this.props.photo.profile_url} />
          <Link to={`/users/${this.props.photo.user_id}`} className='photo-username'>{this.props.photo.username}</Link>
        </div>
        <div className='bot-pic'>
          <img className='to-modal' onClick={this.openModal} src={this.props.photo.image_url} />

          <Modal
            contentLabel=''
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}>

            <section>
              <p className='exit-button'><button onClick={this.closeModal}>close</button></p>
              <p className='exit-button'><button onClick={this.handleDeleteClick.bind(this)}>delete</button></p>
              <div className='modal-top'>
                <img src={this.props.photo.image_url} />
              </div>
              <div className='commentbox'>
                <CommentContainer photoId={this.props.photo.id}/>
              </div>
            </section>

          </Modal>

          <li className='photo-title'>
            <h5>{this.props.photo.title} - {this.props.photo.description}</h5>
          </li>
        </div>
      </div>
    );
  }
}


export default PhotoStreamItem;
