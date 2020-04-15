import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../reducers/user';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Header user={user} onLogout={onLogout} />
    </>
  );
};

export default HeaderContainer;
