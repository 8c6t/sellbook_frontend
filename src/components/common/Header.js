import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        SellBook
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          {user ? (
            <>
              <Nav.Link disabled>{user.nickname} 님</Nav.Link>
              <Button variant="dark" size="sm" onClick={onLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/sign-in">
                로그인
              </Nav.Link>
              <Nav.Link as={Link} to="/sign-up">
                회원가입
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
