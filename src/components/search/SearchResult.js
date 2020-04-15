import React from 'react';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';
import BookList from '../book/BookList';

const ButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: 1rem;
`;

const SearchResult = ({
  bookList,
  onCheck,
  onCheckAll,
  addStorageOne,
  addStorageAll,
}) => {
  return (
    <>
      <ButtonWrapper>
        <Button variant="success" size="sm" onClick={addStorageAll}>
          선택한 책들 보관
        </Button>
      </ButtonWrapper>
      <BookList
        type="search"
        books={bookList}
        onCheck={onCheck}
        onCheckAll={onCheckAll}
        addStorageOne={addStorageOne}
      />
    </>
  );
};

export default React.memo(SearchResult);
