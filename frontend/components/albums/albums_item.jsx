import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../profile/modal_style';
import AlbumCreateFormContainer from './album_create_form_container';
import PhotoCreateFormContainer from './photo_create_form_container';

class AlbumsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, modalOpen2: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal2() {
    this.setState({ modalOpen2: true });
  }

  closeModal2() {
    this.setState({ modalOpen2: false });
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.props.deleteAlbum(this.props.album.id);
  }

  render() {

    return(
      <li>
        <div>
          <h3>
            <Link to={`/users/${this.props.album.user_id}/albums/${this.props.album.id}`}>{this.props.album.title}</Link>
            {this.props.props.currentUser.id === this.props.album.user_id ?
            <button onClick={this.handleDeleteClick.bind(this)}>Delete</button> : <a/>}
            <button onClick={this.openModal}>Create Album</button>
            <button onClick={this.openModal2}>Add Photo</button>

            <Modal
              contentLabel=''
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={ModalStyle}>

              <div>
                <AlbumCreateFormContainer />
                <Link onClick={this.closeModal}>close</Link>
              </div>

            </Modal>

            <Modal
              contentLabel=''
              isOpen={this.state.modalOpen2}
              onRequestClose={this.closeModal2}
              style={ModalStyle}>

              <div>
                <PhotoCreateFormContainer albumId={this.props.album.id}/>
                <Link onClick={this.closeModal2}>close</Link>
              </div>

            </Modal>
          </h3>


        </div>
      </li>
    );
  }
}

export default AlbumsItem;
