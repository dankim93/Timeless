import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions.js';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // if (currentUser === null) {
      //   return _nullUser;
      // }
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    case CLEAR_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
