import { all } from 'redux-saga/effects';
import bookSaga from './book';

export default function* rootSaga() {
  yield all([bookSaga()]);
}
