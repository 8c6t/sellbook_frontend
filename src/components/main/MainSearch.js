import React from 'react';
import { Button, Col, Form, FormControl, Jumbotron } from 'react-bootstrap';
import CenterJumbotron from '../common/CenterJumbotron';
import styled from 'styled-components';

const StyledInput = styled(FormControl)`
  margin-bottom: 1rem;
`;

const MainSearch = ({ query, onChangeQuery, onSubmit }) => {
  return (
    <CenterJumbotron title="도서 매입 가격 검색">
      <Form onSubmit={onSubmit}>
        <StyledInput
          size="lg"
          type="text"
          value={query}
          onChange={onChangeQuery}
        />
        <Button variant="primary" type="submit" block>
          검색
        </Button>
      </Form>
    </CenterJumbotron>
  );
};

export default MainSearch;
