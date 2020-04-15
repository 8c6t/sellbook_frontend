import React from 'react';

const StorageResultSummary = ({ nickname, totalCount }) => {
  return (
    <div>
      <h2>{nickname} 님의 보관함</h2>
      {totalCount !== 0 ? (
        <p>총 {totalCount} 권의 책을 보관중입니다</p>
      ) : (
        <p>보관중인 책이 없습니다</p>
      )}
    </div>
  );
};

export default React.memo(StorageResultSummary);
