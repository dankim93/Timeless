import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {
  fetchComments,
  fetchComment,
  createComment,
  deleteComment
} from '../../../actions/comment_actions';
