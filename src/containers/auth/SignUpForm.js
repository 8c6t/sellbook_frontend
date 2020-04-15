import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInput } from '../../lib/customHooks';
import { signUp } from '../../reducers/auth';
import SignUp from '../../components/auth/SignUp';
import { check } from '../../reducers/user';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useInput('');
  const [nickname, setNickname] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useInput('');
  const [error, setError] = useState(null);

  const { auth, authError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email) {
        return setError('이메일을 입력해주세요');
      }

      if (!nickname) {
        return setError('닉네임을 입력해주세요');
      }

      if (!password) {
        return setError('비밀번호를 작성해주세요');
      }

      if (password !== passwordCheck) {
        return setError('비밀번호가 일치하지 않습니다');
      }

      dispatch(signUp({ email, nickname, password }));
    },
    [email, nickname, password, passwordCheck]
  );

  useEffect(() => {
    if (authError) {
      // TODO 2020.04.15 회원 가입 에러 분기처리(서버 처리 필요)
      setError('회원가입 실패');
      return;
    }

    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }

    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log('localStorage is not working');
    }
  }, [user, history]);

  return (
    <>
      <SignUp
        email={email}
        nickname={nickname}
        password={password}
        passwordCheck={passwordCheck}
        onChangeEmail={setEmail}
        onChangeNickname={setNickname}
        onChangePassword={setPassword}
        onChangePasswordCheck={setPasswordCheck}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default SignUpForm;
