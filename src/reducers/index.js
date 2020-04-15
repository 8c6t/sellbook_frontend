import { combineReducers } from 'redux';
import search from './search';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  search,
  auth,
  user,
});

export default rootReducer;
