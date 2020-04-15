import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { LOGIN } from '../reducers/auth';
import * as authAPI from '../lib/api/auth';

const loginSaga = createRequestSaga(LOGIN, authAPI.signIn);

export default function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
