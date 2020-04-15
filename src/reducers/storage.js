import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

export const [
  ADD_STORAGE,
  ADD_STORAGE_SUCCESS,
  ADD_STORAGE_FAILURE,
] = createRequestActionTypes('storage/ADD_STORAGE');

export const [
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
] = createRequestActionTypes('storage/DELETE_BOOK');

export const addStorage = createAction(ADD_STORAGE, (bookIds) => bookIds);
export const deleteBook = createAction(DELETE_BOOK, (bookIds) => bookIds);

const initialState = {
  bookList: [],
  totalCount: 0,
  isLoading: false,
  storageError: null,
};

const storage = handleActions(
  {
    [ADD_STORAGE_SUCCESS]: (state, payload) => ({
      ...state,
      storageError: null,
    }),
    [ADD_STORAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      storageError: error,
    }),
  },
  initialState
);

export default storage;
