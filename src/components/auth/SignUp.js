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

const SignUp = ({
  email,
  nickname,
  password,
  passwordCheck,
  onChangeEmail,
  onChangeNickname,
  onChangePassword,
  onChangePasswordCheck,
  onSubmit,
  error,
}) => {
  return (
    <CenterJumbotron title="회원가입">
      <Form onSubmit={onSubmit}>
        <StyledInput
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일"
        />
        <StyledInput
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="닉네임"
        />
        <StyledInput
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        />
        <StyledInput
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          placeholder="비밀번호 확인"
        />
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Button type="submit" variant="primary" block>
          회원가입
        </Button>
      </Form>
    </CenterJumbotron>
  );
};

export default SignUp;
