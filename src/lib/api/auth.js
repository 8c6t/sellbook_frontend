import client from './client';

export const signIn = ({ username, password }) =>
  client.post('/auth/login', { username, password });

export const signUp = ({ username, nickname, password }) =>
  client.post('/auth/account', { username, nickname, password });

export const logout = () => client.post('/auth/logout');

export const check = () => client.get('/auth/account');
