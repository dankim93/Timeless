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
        <div>
          <h3> {this.props.comment.body} {this.props.props.currentUser.id === this.props.comment.user_id ?
            <button className='delete-button' onClick={this.handleDeleteClick.bind(this)}>Delete</button> : <a/>}</h3>
        </div>
      </li>
    );
  }
}

export default withRouter(CommentItem);
