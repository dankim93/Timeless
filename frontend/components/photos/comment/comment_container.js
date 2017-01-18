import {connect} from 'react-redux';
import { values } from 'lodash';
import CommentForm from './comment_form';
import {
  fetchComments,
  fetchComment,
  createComment,
  deleteComment
} from '../../../actions/comment_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  comments: values(state.comments),
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchComments: (data) => dispatch(fetchComments(data)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
