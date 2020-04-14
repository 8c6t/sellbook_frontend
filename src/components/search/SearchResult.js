import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';
import BookList from '../book/BookList';
import SearchResultSummary from './SearchResultSummary';
import SearchAgain from './SearchAgain';

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

const SelectedAction = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: 1rem;
`;

const SearchResult = ({
  query,
  totalCount,
  onChangeQuery,
  onSubmit,
  bookList,
}) => {
  const word = useRef(query);
  return (
    <Wrapper>
      <SearchResultSummary word={word.current} totalCount={totalCount} />
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

export default React.memo(SearchResult);
