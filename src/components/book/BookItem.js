import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';

const Book = styled.tr`
  td {
    vertical-align: middle;

    :not(.bookInfo) {
      text-align: center;
    }
  }

  .check {
    width: 2.5%;
  }

  .img {
    width: 10%;
  }

  .bookInfo {
    width: 35%;

    .bookTitle {
      font-size: 1.1em;
      font-weight: bold;
    }

    .bookISBN,
    .bookAuthor,
    .bookPublisher {
      font-size: 0.8em;
      margin-bottom: 0.1em;
    }
  }

  .bookStatus,
  .bookPrice,
  .secondPrice,
  .btnArea {
    width: 10%;

    p {
      margin-bottom: 0.5em;
    }
  }
`;

const BookItem = ({ book }) => {
  const { isbn, title, author, publisher, img, price, secondPrices } = book;
  const aladin = secondPrices.find((e) => e.site === 'ALADIN');
  const yes24 = secondPrices.find((e) => e.site === 'YES24');

  return (
    <Book>
      <td className="check">
        <input type="checkbox" />
      </td>
      <td className="img">
        <Image src={img} rounded thumbnail></Image>
      </td>
      <td className="bookInfo">
        <p className="bookTitle">{title}</p>
        <p className="bookISBN">{isbn} (ISBN)</p>
        <p className="bookAuthor">{author}</p>
        <p className="bookPublisher">{publisher}</p>
      </td>
      <td className="bookPrice">{price}원</td>
      <td className="bookStatus">
        <p>상</p>
        <p>중</p>
        <p>하</p>
      </td>
      <td className="secondPrice">
        <p>{aladin.grade_a}원</p>
        <p>{aladin.grade_b}원</p>
        <p>{aladin.grade_c}원</p>
      </td>
      <td className="secondPrice">
        <p>{yes24.grade_a}원</p>
        <p>{yes24.grade_b}원</p>
        <p>{yes24.grade_c}원</p>
      </td>
      {/* TODO 호출 경로에 따라 다른 컴포넌트 렌더링 */}
      <td className="btnArea">
        <Button variant="success" size="sm">
          보관
        </Button>
        <Button variant="danger" size="sm">
          삭제
        </Button>
      </td>
    </Book>
  );
};

export default BookItem;
