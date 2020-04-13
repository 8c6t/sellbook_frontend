import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import book from './book';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default function* rootSaga() {
  yield all([call(book)]);
}
