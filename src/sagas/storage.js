import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import { ADD_STORAGE } from '../reducers/storage';

import * as storageAPI from '../lib/api/storage';

const loadStorageSaga = createRequestSaga(ADD_STORAGE, storageAPI.loadStorage);
const addStorageSaga = createRequestSaga(ADD_STORAGE, storageAPI.addStorage);
const deleteBookSaga = createRequestSaga(ADD_STORAGE, storageAPI.deleteBook);

export default function* storageSaga() {
  yield takeLatest(ADD_STORAGE, addStorageSaga);
}
