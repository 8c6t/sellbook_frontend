import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { ADD_STORAGE, LOAD_STORAGE, DELETE_BOOK } from '../reducers/storage';

import * as storageAPI from '../lib/api/storage';

const loadStorageSaga = createRequestSaga(LOAD_STORAGE, storageAPI.loadStorage);
const addStorageSaga = createRequestSaga(ADD_STORAGE, storageAPI.addStorage);
const deleteBookSaga = createRequestSaga(DELETE_BOOK, storageAPI.deleteBook);

export default function* storageSaga() {
  yield takeLatest(LOAD_STORAGE, loadStorageSaga);
  yield takeLatest(ADD_STORAGE, addStorageSaga);
  yield takeLatest(DELETE_BOOK, deleteBookSaga);
}
