import { all } from 'redux-saga/effects';
import bookSaga from './book';
import authSaga from './auth';
import userSaga from './user';

export default function* rootSaga() {
  yield all([bookSaga(), authSaga(), userSaga()]);
}
