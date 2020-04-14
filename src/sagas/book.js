import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { SEARCH } from '../reducers/book';

import * as searchAPI from '../lib/api/search';

const searchSaga = createRequestSaga(SEARCH, searchAPI.search);

export default function* bookSaga() {
  yield takeLatest(SEARCH, searchSaga);
}
