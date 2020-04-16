import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  checkAll,
  checkOne,
  deleteBook,
  loadStorage,
} from '../../reducers/storage';
import StorageResult from '../../components/storage/StorageResult';
import StorageResultSummary from '../../components/storage/StorageResultSummary';

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

const StorageContainer = ({ page = 0 }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { bookList, totalCount, isLoading, deleteSuccess, user } = useSelector(
    ({ storage, user }) => ({
      bookList: storage.bookList,
      totalCount: storage.totalCount,
      isLoading: storage.isLoading,
      deleteSuccess: storage.deleteSuccess,
      user: user.user,
    })
  );

  const currentPage = useMemo(() => {
    return Math.ceil(bookList.length / 10) - 1;
  }, [bookList.length]);

  const onCheck = useCallback(
    (id) => () => {
      dispatch(checkOne(id));
    },
    []
  );

  const onCheckAll = useCallback((e) => {
    dispatch(checkAll(e.target.checked));
  }, []);

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 100 &&
      Math.ceil(totalCount / 10) > currentPage + 1
    ) {
      dispatch(
        loadStorage({
          page: currentPage + 1,
        })
      );
    }
  };

  const deleteStorageOne = useCallback(
    (id) => () => {
      dispatch(deleteBook([id]));
    },
    []
  );

  const deleteStorageAll = useCallback(() => {
    const checkedBookIds = bookList.filter((e) => e.checked).map((e) => e.id);
    if (!checkedBookIds.length) {
      alert('책을 선택해주세요');
      return;
    }
    dispatch(deleteBook(checkedBookIds));
  }, [bookList]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [bookList.length]);

  useEffect(() => {
    dispatch(loadStorage({ isFirst: true }));
  }, [page === 0]);

  useEffect(() => {
    if (deleteSuccess) {
      alert('책을 보관함에서 삭제했습니다');
      dispatch(loadStorage({ isFirst: true }));
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (!user) {
      alert('로그인이 필요한 페이지입니다');
      history.push('/sign-in');
    }
  }, [user]);

  return (
    <Wrapper>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        user && (
          <>
            <StorageResultSummary
              nickname={user.nickname}
              totalCount={totalCount}
            />
            <StorageResult
              bookList={bookList}
              onCheck={onCheck}
              onCheckAll={onCheckAll}
              onClickBtn={deleteStorageOne}
              deleteStorageAll={deleteStorageAll}
              user={user}
            />
          </>
        )
      )}
    </Wrapper>
  );
};

export default React.memo(StorageContainer);
