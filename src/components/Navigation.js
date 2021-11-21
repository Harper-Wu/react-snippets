import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from '../logo.svg';

function Navigation() {
  return (
    <>
      <Navbar 
        bg="green" 
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect>
        <Navbar.Brand href="/">
          <img src={logo} width="36px" height="36px"/>
          React Snippets
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* right-aligned Nav*/}
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <NavDropdown title="Snippets">
              <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/todo">Todo App</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;