import { combineReducers } from 'redux';
import search from './search';
import auth from './auth';
import user from './user';
import storage from './storage';

const rootReducer = combineReducers({
  search,
  auth,
  user,
  storage,
});

export default rootReducer;
