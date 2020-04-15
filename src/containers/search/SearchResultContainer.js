import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { checkAll, checkOne, searchBook } from '../../reducers/search';
import { addStorage } from '../../reducers/storage';

import SearchResult from '../../components/search/SearchResult';
import SearchAgain from '../../components/search/SearchAgain';
import SearchResultSummary from '../../components/search/SearchResultSummary';

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

const SearchResultContainer = ({ query: firstQuery, page = 0 }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [query, setQuery] = useState(firstQuery);

  const { bookList, totalCount, isLoading, user } = useSelector(
    ({ search, user }) => ({
      bookList: search.bookList,
      totalCount: search.totalCount,
      isLoading: search.isLoading,
      user: user.user,
    })
  );

  const currentPage = useMemo(() => {
    return Math.ceil(bookList.length / 10) - 1;
  }, [bookList.length]);

  const onChangeQuery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/search/${query}`);
    },
    [query, history]
  );

  const onCheck = useCallback(
    (id) => () => {
      dispatch(checkOne(id));
    },
    []
  );

  const onCheckAll = useCallback((e) => {
    dispatch(checkAll(e.target.checked));
  }, []);

  const addStorageOne = useCallback(
    (id) => () => {
      if (!user) {
        alert('로그인이 필요합니다');
        history.push('/sign-in');
      }
      dispatch(addStorage([id]));
    },
    [user]
  );

  const addStorageAll = useCallback(() => {
    const checkedBookIds = bookList.filter((e) => e.checked).map((e) => e.id);
    if (!checkedBookIds.length) {
      alert('책을 선택해주세요');
      return;
    }
    dispatch(addStorage(checkedBookIds));
  }, [bookList]);

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 100 &&
      Math.ceil(totalCount / 10) > currentPage + 1
    ) {
      dispatch(
        searchBook({
          query,
          page: currentPage + 1,
        })
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [bookList.length]);

  useEffect(() => {
    dispatch(
      searchBook({
        query: firstQuery,
        page,
        isFirst: true,
      })
    );
  }, [firstQuery, page, dispatch]);

  return (
    <Wrapper>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <SearchResultSummary word={firstQuery} totalCount={totalCount} />
          <SearchAgain
            query={query}
            onChangeQuery={onChangeQuery}
            onSubmit={onSubmit}
          />
          <SearchResult
            bookList={bookList}
            onCheck={onCheck}
            onCheckAll={onCheckAll}
            addStorageOne={addStorageOne}
            addStorageAll={addStorageAll}
          />
        </>
      )}
    </Wrapper>
  );
};

export default React.memo(SearchResultContainer);
