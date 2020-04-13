import React, { useCallback, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import BookList from '../components/book/BookList';
import SearchAgain from '../components/search/SearchAgain';

import * as bookActions from '../reducers/book';

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

const SelectedAction = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: 1rem;
`;

const SearchResult = ({ query: word, page }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [query, setQuery] = useState(word);
  const { bookList, totalCount, isLoading } = useSelector(
    (state) => state.book
  );

  useEffect(() => {
    dispatch({
      type: bookActions.SEARCH_BOOK_REQUEST,
      data: {
        query,
        page,
      },
    });
  }, [word]);

  const onChangeQuery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/search/${query}`);
    },
    [query]
  );

  return (
    <Wrapper>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <div>
            <h2>{word} 검색 결과</h2>
            <p>총 {totalCount} 개의 책이 검색되었습니다</p>
          </div>
          <SearchAgain
            query={query}
            onChangeQuery={onChangeQuery}
            onSubmit={onSubmit}
          />
          <SelectedAction>
            <Button variant="success" size="sm">
              선택한 책들 보관
            </Button>
          </SelectedAction>
          <BookList books={bookList} />
        </>
      )}
    </Wrapper>
  );
};

export default SearchResult;
