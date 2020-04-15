import React from 'react';
import styled from 'styled-components';
import { Button, Form, FormControl } from 'react-bootstrap';
import CenterJumbotron from '../common/CenterJumbotron';

const StyledInput = styled(FormControl)`
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
    <CenterJumbotron title="로그인">
      <Form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          value={username}
          onChange={onChangeUsername}
          placeholder="이메일 혹은 닉네임"
        />
        <StyledInput
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
    </CenterJumbotron>
  );
};

export default SignIn;
