import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        SellBook
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          {/* TODO 로그인 여부에 따라 다른 컴포넌트 렌더링 */}
          {/* 미로그인 시 */}
          <Nav.Link as={Link} to="/sign-in">
            로그인
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-up">
            회원가입
          </Nav.Link>
          {/* 로그인 시 */}
          <Nav.Link as={Link} to="/profile">
            OOO 님
          </Nav.Link>
          <Nav.Link as={Link} to="/logout">
            로그아웃
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
