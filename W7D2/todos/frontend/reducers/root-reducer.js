import { combineReducers } from 'redux';

import todosReducer from './todos-reducer';
import errorReducer from './error-reducer';

const rootReducer = combineReducers(
  {
    todos: todosReducer,
    errors: errorReducer
  }
);

export default rootReducer;
