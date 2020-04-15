import React from 'react';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';
import BookList from '../book/BookList';

const ButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: 1rem;
`;

const SearchResult = ({ bookList, onCheck, onCheckAll }) => {
  return (
    <>
      <ButtonWrapper>
        <Button variant="success" size="sm">
          선택한 책들 보관
        </Button>
      </ButtonWrapper>
      <BookList books={bookList} onCheck={onCheck} onCheckAll={onCheckAll} />
    </>
  );
};

export default React.memo(SearchResult);
