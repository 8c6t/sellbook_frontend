import client from './client';

export const loadStorage = ({ page = 0 }) =>
  client.get(`/v1/storage?page=${page}`);

export const addStorage = (bookIds) => client.post(`/v1/storage`, bookIds);

export const deleteBook = (bookIds) =>
  client.delete(`/v1/storage`, { data: bookIds });
