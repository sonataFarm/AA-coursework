import { combineReducers } from 'redux';

import entitiesReducer from './entities/entities-reducer';

export default combineReducers({
  entities: entitiesReducer
});
