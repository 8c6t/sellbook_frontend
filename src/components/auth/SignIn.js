import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Col,
  Form,
  FormControl,
  Jumbotron,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wrapper = styled(Row)`
  height: 90vh;
`;

const SignInHeader = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const Input = styled(FormControl)`
  margin-bottom: 1rem;
`;

const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

const SignIn = ({
  username,
  onChangeUsername,
  password,
  onChangePassword,
  onSubmit,
  error,
}) => {
  return (
    <Wrapper>
      <Col md={{ span: 6, offset: 3 }} className="my-auto">
        <Jumbotron>
          <SignInHeader>로그인</SignInHeader>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              value={username}
              onChange={onChangeUsername}
              placeholder="Email 혹은 닉네임"
            />
            <Input
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호"
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Button type="submit" variant="primary" block>
              로그인
            </Button>
          </Form>
        </Jumbotron>
      </Col>
    </Wrapper>
  );
};

export default SignIn;
