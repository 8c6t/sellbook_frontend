import { all } from 'redux-saga/effects';
import searchSaga from './search';
import authSaga from './auth';
import userSaga from './user';
import storageSaga from './storage';

export default function* rootSaga() {
  yield all([searchSaga(), authSaga(), userSaga(), storageSaga()]);
}
