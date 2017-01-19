import React from 'react';
import CommentItem from './comment_item';
import { Link } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      photo_id: this.props.photoId,
      user_id: this.props.currentUser.id,
    };
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ''});
  }

  update(prop) {
    return e => this.setState({[prop]: e.target.value});
  }
  render() {
      const filterComments = (id) => {
        let result = [];
        this.props.comments.map(comment => {
          if (comment.photo_id === id) {
            result.push(comment);
          }
        });
        return result;
      };

      const displayComments = filterComments(this.props.photoId).map(comment => (
        <CommentItem key={comment.id} comment={comment} props={this.props} />
      ));

      return(
        <section className='comment-form'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type='type'
              id='comment-body'
              value={this.state.body}
              placeholder='Add a comment...'
              autoComplete='off'
              onChange={this.update('body')}/>
            <button>Add</button>
          </form>
          <h3>Comments</h3>
          <ul>
            { displayComments }
          </ul>
        </section>
      );
    }
  }


export default CommentForm;
