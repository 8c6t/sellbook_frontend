import React from 'react';
import qs from 'qs';
import SearchResult from '../containers/SearchResult';

const SearchPage = ({ match, location }) => {
  const { query } = match.params;
  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return <SearchResult query={query} page={page} />;
};

export default SearchPage;
