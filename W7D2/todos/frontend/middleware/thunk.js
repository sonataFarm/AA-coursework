const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    // transform the action if it's a function.
    return action(dispatch, getState);
  } else {
    // else it's a normal action
    return next(action)
  }
};

export default thunk;
