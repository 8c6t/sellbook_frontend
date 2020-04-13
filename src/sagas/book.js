import { all, call, put, throttle, fork } from 'redux-saga/effects';
import axios from 'axios';

import * as bookActions from '../reducers/book';

function searchBookAPI({ query, page = 0 }) {
  return axios.get(`/v1/search/${query}?page=${page}`);
}

function* searchBooks(action) {
  try {
    const result = yield call(searchBookAPI, action.data);
    yield put({
      type: bookActions.SEARCH_BOOK_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: bookActions.SEARCH_BOOK_FAILURE,
      error,
    });
  }
}

function* watchSearchBooks() {
  yield throttle(2000, bookActions.SEARCH_BOOK_REQUEST, searchBooks);
}

export default function* bookSaga() {
  yield all([fork(watchSearchBooks)]);
}
