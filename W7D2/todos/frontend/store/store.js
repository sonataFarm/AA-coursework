import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';
import { applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';

let middleware = [thunk];

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
  // return createStore(rootReducer);
}

export default configureStore;
