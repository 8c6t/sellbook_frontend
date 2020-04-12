import React from 'react';
import { Container, Switch } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SearchPage from './pages/SearchPage';
import StoragePage from './pages/StoragePage';

import Header from './components/Header';

const AppContainer = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/storage" component={StoragePage} />
          <Route path="/search/:query" component={SearchPage} />
        </Switch>
      </Container>
    </AppContainer>
  );
}

export default App;
