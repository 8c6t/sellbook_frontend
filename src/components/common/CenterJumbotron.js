import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled(Row)`
  height: 90vh;
`;

const TitleText = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const CenterJumbotron = ({ title, children }) => {
  return (
    <Wrapper>
      <Col md={{ span: 6, offset: 3 }} className="my-auto">
        <Jumbotron>
          <TitleText>{title}</TitleText>
          {children}
        </Jumbotron>
      </Col>
    </Wrapper>
  );
};

export default CenterJumbotron;
