import React from 'react';
import qs from 'qs';

const SearchPage = ({ match, location }) => {
  const { query } = match.params;
  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <div>
      <h2>검색 결과 페이지</h2>
      <h2>{query}</h2>
      <h2>{page}</h2>
    </div>
  );
};

export default SearchPage;
