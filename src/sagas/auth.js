import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { LOGIN, SIGNUP } from '../reducers/auth';
import * as authAPI from '../lib/api/auth';

const loginSaga = createRequestSaga(LOGIN, authAPI.signIn);
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);

export default function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, signUpSaga);
}
