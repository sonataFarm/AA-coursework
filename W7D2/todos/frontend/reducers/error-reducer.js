import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error-actions';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return [
        ...state,
        ...action.errors
      ];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
