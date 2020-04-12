import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';
import BookList from '../components/book/BookList';
import SearchAgain from '../components/search/SearchAgain';

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

const SelectedAction = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: 1rem;
`;

const SearchResult = ({ query: word, page }) => {
  const [query, setQuery] = useState(word);
  const [totalCount, setTotalCount] = useState(0);
  const [bookList, setBookList] = useState([]);

  const onChangeQuery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const onSubmit = useCallback(
    // TODO 2030.04.13 재검색 기능
    (e) => {
      e.preventDefault();
    },
    [query]
  );

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default SearchResult;
