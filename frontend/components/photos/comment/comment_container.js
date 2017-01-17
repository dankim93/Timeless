import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {
  fetchComments,
  fetchComment,
  createComment,
  deleteComment
} from '../../../actions/comment_actions';

const mapStateToProps = ({comments, session}, {photoId}) => ({
  comments: comments,
  currentUser: session.currentUser,
  photoId
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchComments: comment => dispatch(fetchComments(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CommentForm);
