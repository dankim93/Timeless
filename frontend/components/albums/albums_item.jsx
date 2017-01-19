import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../photos/modal_style';

class AlbumsItem extends React.Component {
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
          </h3>
        </div>
      </li>
    );
  }
}

export default AlbumsItem;
