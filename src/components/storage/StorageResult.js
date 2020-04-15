import React from 'react';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';
import BookList from '../book/BookList';

const ButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: 1rem;
`;

const StorageResult = ({
  bookList,
  onCheck,
  onCheckAll,
  onClickBtn,
  deleteStorageAll,
}) => {
  return (
    <>
      <ButtonWrapper>
        <Button variant="danger" size="sm" onClick={deleteStorageAll}>
          선택한 책들 삭제
        </Button>
      </ButtonWrapper>
      <BookList
        type="storage"
        books={bookList}
        onCheck={onCheck}
        onCheckAll={onCheckAll}
        onClickBtn={onClickBtn}
      />
    </>
  );
};

export default React.memo(StorageResult);
