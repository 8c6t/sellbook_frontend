import { combineReducers } from 'redux';
import book from './book';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  book,
  auth,
  user,
});

export default rootReducer;
