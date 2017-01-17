import { RECEIVE_USER } from '../actions/user_actions.js';
import merge from 'lodash/merge';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge(newState, action.user);
    default:
      return state;
  }
};

export default UsersReducer;
