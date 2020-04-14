import React, { useCallback, useState } from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  Jumbotron,
  Row,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Row)`
  height: 90vh;
`;

const TitleText = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const QueryInput = styled(FormControl)`
  margin-bottom: 2rem;
`;

const MainSearchForm = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const onChangeQuery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/search/${query}`);
    },
    [query, history]
  );

  return (
    <Wrapper>
      <Col md={{ span: 6, offset: 3 }} className="my-auto">
        <Jumbotron>
          <TitleText>도서 매입 가격 검색</TitleText>
          <Form onSubmit={onSubmit}>
            <QueryInput
              size="lg"
              type="text"
              value={query}
              onChange={onChangeQuery}
            />
            <Button variant="primary" type="submit" block>
              검색
            </Button>
          </Form>
        </Jumbotron>
      </Col>
    </Wrapper>
  );
};

export default MainSearchForm;
