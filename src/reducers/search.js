import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

export const [
  SEARCH_BOOK,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAILURE,
] = createRequestActionTypes('search/SEARCH_BOOK');

export const CHECK_ONE = 'search/CHECK_ONE';
export const CHECK_ALL = 'search/CHECK_ALL';

export const searchBook = createAction(
  SEARCH_BOOK,
  ({ query, page, isFirst }) => ({
    query,
    page,
    isFirst,
  })
);

export const checkOne = createAction(CHECK_ONE, (id) => ({ id }));
export const checkAll = createAction(CHECK_ALL, (checked) => ({ checked }));

const initialState = {
  bookList: [],
  totalCount: 0,
  isLoading: false,
  searchError: null,
};

const search = handleActions(
  {
    [SEARCH_BOOK]: (state, { payload: { isFirst } }) => ({
      ...state,
      isLoading: isFirst,
      bookList: isFirst
        ? []
        : state.bookList.map((e) => ({ ...e, checked: false })),
      searchError: null,
    }),
    [SEARCH_BOOK_SUCCESS]: (
      state,
      { payload: { content, totalElements } }
    ) => ({
      ...state,
      bookList: state.bookList.concat(
        content.map((e) => ({ ...e, checked: false }))
      ),
      totalCount: totalElements,
      isLoading: false,
      searchError: null,
    }),
    [SEARCH_BOOK_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      bookList: [],
      isLoading: false,
      searchError: error,
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

export default search;
