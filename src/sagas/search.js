import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { SEARCH_BOOK } from '../reducers/search';

import * as searchAPI from '../lib/api/search';

const searchBookSaga = createRequestSaga(SEARCH_BOOK, searchAPI.search);

export default function* searchSaga() {
  yield takeLatest(SEARCH_BOOK, searchBookSaga);
}
