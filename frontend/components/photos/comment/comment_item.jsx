import React from 'react';
import { withRouter } from 'react-router';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeleteClick(e) {

    e.preventDefault();
    this.props.props.deleteComment(this.props.comment.id);
  }

  render() {

    return(
      <li>
        <div className="comments">
          <img className="comment-img" src={this.props.comment.profile_url}></img>
          <text className="comment-text">{this.image} {this.props.comment.username}:  {this.props.comment.body} {this.props.props.currentUser.id === this.props.comment.user_id ?
          <button className='delete-button' onClick={this.handleDeleteClick.bind(this)}>Delete</button> : <a/>}</text>
        </div>
      </li>
    );
  }
}

export default withRouter(CommentItem);
