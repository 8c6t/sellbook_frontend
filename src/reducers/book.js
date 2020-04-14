import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

export const [
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
] = createRequestActionTypes('book/SEARCH');

export const search = createAction(SEARCH, ({ query, page, isFirst }) => ({
  query,
  page,
  isFirst,
}));

const initialState = {
  bookList: [],
  totalCount: 0,
  isLoading: false,
  searchError: null,
};

const book = handleActions(
  {
    [SEARCH]: (state, { payload: { isFirst } }) => ({
      ...state,
      isLoading: isFirst,
      bookList: isFirst ? [] : state.bookList,
      searchError: null,
    }),
    [SEARCH_SUCCESS]: (state, { payload: { content, totalElements } }) => ({
      ...state,
      bookList: state.bookList.concat(content),
      totalCount: totalElements,
      isLoading: false,
      searchError: null,
    }),
    [SEARCH_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      bookList: [],
      isLoading: false,
      searchError: error,
    }),
  },
  initialState
);

export default book;
