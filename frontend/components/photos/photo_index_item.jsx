import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import CommentContainer from './comment/comment_container';
import ModalStyle from './modal_style';



class PhotoIndexItem extends React.Component {
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
      <div className='photo-grid'>
        <div className='top-pic'>
          <img className='profile-pic' src={this.props.photo.profile_url} />
          <Link to={`/users/${this.props.photo.user_id}`} className='photo-username'>{this.props.photo.username}</Link>
        </div>
        <div className='bot-pic'>
          <Link to='login' className='to-modal' onClick={this.openModal}  ><img src={this.props.photo.image_url}/></Link>

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


          <li className='photo-title'>
            <h5>{this.props.photo.title} - {this.props.photo.description}</h5>
          </li>
        </div>
      </div>

    );
  }
}


export default PhotoIndexItem;
