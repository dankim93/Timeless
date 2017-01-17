import * as APIUtil from '../util/comments_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComments = (filters) => dispatch => (
  APIUtil.fetchComments(filters).then(comments => dispatch(receiveComments(comments)))
);

export const fetchComment = id => dispatch => (
  APIUtil.fetchComment(id).then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(newComment => dispatch(receiveComment(newComment)))
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id).then(comment => dispatch(removeComment(comment)))
);
