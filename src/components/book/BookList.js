import React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

import BookItem from '../../components/book/BookItem';

const BookListTable = styled(Table)`
  margin-top: 1rem;

  th {
    font-size: 0.9em;
    vertical-align: middle;
    text-align: center;
  }
`;

const BookList = ({ books, onCheck, onCheckAll }) => {
  return (
    <BookListTable bordered>
      <thead>
        <tr>
          <th>
            <input type="checkbox" onChange={onCheckAll} />
          </th>
          <th colSpan="2">상품정보</th>
          <th>정가</th>
          <th>상태</th>
          <th>알라딘</th>
          <th>YES24</th>
          <th>장바구니</th>
        </tr>
      </thead>
      <tbody>
        {books.map((v, i) => (
          <BookItem book={v} key={i} onCheck={onCheck} />
        ))}
      </tbody>
    </BookListTable>
  );
};

export default React.memo(BookList);
