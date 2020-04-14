import React from 'react';

const SearchResultSummary = ({ word, totalCount }) => {
  return (
    <div>
      <h2>{word} 검색 결과</h2>
      <p>총 {totalCount} 개의 책이 검색되었습니다</p>
    </div>
  );
};

export default React.memo(SearchResultSummary);
