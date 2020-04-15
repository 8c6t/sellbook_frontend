import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../lib/customHooks';
import SignIn from '../../components/auth/SignIn';
import { login } from '../../reducers/auth';
import { check } from '../../reducers/user';

const SignInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useInput('');
  const [password, setPassword] = useInput('');
  const [error, setError] = useState(null);

  const { auth, authError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!username) {
        return setError('이메일 혹은 닉네임을 작성해주세요');
      }

      if (!password) {
        return setError('비밀번호를 작성해주세요');
      }

      dispatch(login({ username, password }));
    },
    [username, password]
  );

  useEffect(() => {
    if (authError) {
      setError('이메일, 닉네임 혹은 비밀번호가 일치하지 않습니다');
      return;
    }

    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <>
      <SignIn
        username={username}
        password={password}
        onChangeUsername={setUsername}
        onChangePassword={setPassword}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default SignInForm;
