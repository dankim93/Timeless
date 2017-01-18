import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
// import CommentContainer from './comment/comment_container';


class PhotoIndexItem extends React.Component {
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

  // _handleClick() {
  //   this.setState({ modalOpen: false});
  // }

  render() {
    return(
      <div className='photo-grid'>
        <div className='top-pic'>
          <img className='profile-pic' src={this.props.photo.profile_url} />
          <Link to={`/users/${this.props.photo.user_id}`} className='photo-username'>{this.props.photo.username}</Link>
        </div>
        <div className='bot-pic'>
          <img onClick={this.openModal} src={this.props.photo.image_url} />

          <Modal
            contentLabel=''
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>

            <button onClick={this.closeModal}>close</button>
            <img src={this.props.photo.image_url} />


          </Modal>



          <li className='photo-title'>
            <h5>{this.props.photo.title} - {this.props.photo.description}</h5>
          </li>
        </div>
      </div>

    );
  }
}
// }
//
// const PhotoIndexItem = ({ photo }) => (
//   <div className='photo-grid'>
//     <div className='top-pic'>
//       <img className='profile-pic' src={photo.profile_url} />
//       <Link to={`/users/${photo.user_id}`} className='photo-username'>{photo.username}</Link>
//     </div>
//     <div className='bot-pic'>
//       <img src={photo.image_url} />
//       <li className='photo-title'>
//         <h5>{photo.title} - {photo.description}</h5>
//       </li>
//     </div>
//   </div>
// );

export default PhotoIndexItem;
