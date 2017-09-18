import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
