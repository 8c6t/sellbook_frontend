import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from '../../reducers/user';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <>
      <Header user={user} onLogout={onLogout} />
    </>
  );
};

export default HeaderContainer;
