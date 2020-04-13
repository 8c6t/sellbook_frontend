import produce from 'immer';

export const initialState = {
  bookList: [],
  totalCount: 0,
  isLoading: false,
  searchErrorReason: '',
};

export const SEARCH_BOOK_REQUEST = 'book/SEARCH_BOOK_REQUEST';
export const SEARCH_BOOK_SUCCESS = 'book/SEARCH_BOOK_SUCCESS';
export const SEARCH_BOOK_FAILURE = 'book/SEARCH_BOOK_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_BOOK_REQUEST: {
        if (action.data.isFirst) {
          draft.isLoading = true;
          draft.bookList = [];
        }
        draft.searchErrorReason = '';
        break;
      }
      case SEARCH_BOOK_SUCCESS: {
        const { content, totalElements } = action.data;
        draft.bookList = draft.bookList.concat(content);
        draft.totalCount = totalElements;
        draft.isLoading = false;
        break;
      }
      case SEARCH_BOOK_FAILURE: {
        draft.searchErrorReason = action.error;
        draft.bookList = [];
        draft.totalCount = 0;
        draft.isLoading = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
