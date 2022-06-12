import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import style from "./header.module.scss";

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Alex Abrahamsson</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Mitt Cv</Nav.Link>
                <NavDropdown title="Stugbygget" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Dasset</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Friggan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Storstugan
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default Header;
