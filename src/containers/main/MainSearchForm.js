import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainSearch from '../../components/main/MainSearch';

const MainSearchForm = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

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

  return (
    <MainSearch
      query={query}
      onChangeQuery={onChangeQuery}
      onSubmit={onSubmit}
    />
  );
};

export default MainSearchForm;
