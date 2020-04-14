import client from './client';

export const search = ({ query, page = 0 }) =>
  client.get(`/v1/search/${query}?page=${page}`);
