import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const SearchAgain = ({ query, onChangeQuery, onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputGroup>
          <FormControl value={query} onChange={onChangeQuery} />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              검색
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

export default React.memo(SearchAgain);
