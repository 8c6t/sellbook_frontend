import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';

export const [
  LOAD_STORAGE,
  LOAD_STORAGE_SUCCESS,
  LOAD_STORAGE_FAILURE,
] = createRequestActionTypes('storage/LOAD_STORAGE');

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

export const CHECK_ONE = 'storage/CHECK_ONE';
export const CHECK_ALL = 'storage/CHECK_ALL';

export const loadStorage = createAction(LOAD_STORAGE, ({ isFirst, page }) => ({
  isFirst,
  page,
}));
export const addStorage = createAction(ADD_STORAGE, (bookIds) => bookIds);
export const deleteBook = createAction(DELETE_BOOK, (bookIds) => bookIds);
export const checkOne = createAction(CHECK_ONE, (id) => ({ id }));
export const checkAll = createAction(CHECK_ALL, (checked) => ({ checked }));

const initialState = {
  bookList: [],
  totalCount: 0,
  isLoading: false,
  storageError: null,
  deleteSuccess: false,
};

const storage = handleActions(
  {
    [LOAD_STORAGE]: (state, { payload: { isFirst } }) => ({
      ...state,
      isLoading: isFirst,
      bookList: isFirst
        ? []
        : state.bookList.map((e) => ({ ...e, checked: false })),
      storageError: null,
      deleteSuccess: false,
    }),
    [LOAD_STORAGE_SUCCESS]: (
      state,
      { payload: { content, totalElements } }
    ) => ({
      ...state,
      bookList: state.bookList.concat(
        content.map((e) => ({ ...e, checked: false }))
      ),
      totalCount: totalElements,
      isLoading: false,
      storageError: null,
    }),
    [LOAD_STORAGE_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      bookList: [],
      isLoading: false,
      storageError: error,
    }),
    [ADD_STORAGE_SUCCESS]: (state, payload) => {
      alert('책을 보관함에 추가했습니다'); // 최선일까...?
      return {
        ...state,
        storageError: null,
      };
    },
    [ADD_STORAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      storageError: error,
    }),
    [DELETE_BOOK_SUCCESS]: (state, payload) => ({
      ...state,
      deleteSuccess: true,
    }),
    [DELETE_BOOK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      storageError: error,
      deleteSuccess: false,
    }),
    [CHECK_ONE]: (state, { payload: { id } }) =>
      produce(state, (draft) => {
        const index = draft.bookList.findIndex((e) => e.id === id);
        draft.bookList[index].checked = !draft.bookList[index].checked;
      }),
    [CHECK_ALL]: (state, { payload: { checked } }) =>
      produce(state, (draft) => {
        draft.bookList.forEach((e) => (e.checked = checked));
      }),
  },
  initialState
);

export default storage;
