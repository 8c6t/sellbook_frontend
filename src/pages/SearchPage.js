import React from 'react';
import qs from 'qs';
import SearchResultContainer from '../containers/search/SearchResultContainer';

const SearchPage = ({ match, location }) => {
  const { query } = match.params;
  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <>
      <SearchResultContainer query={query} page={page} />
    </>
  );
};

export default SearchPage;
