import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">DevCode</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <NavLink style = {{textDecoration: 'none'}} to = "/">
        <Nav.Link href="/">Home</Nav.Link>
      </NavLink>
      <NavLink style = {{textDecoration: 'none'}} to = "/courses">
        <Nav.Link href="/courses">Courses</Nav.Link>
      </NavLink>
      <NavLink style = {{textDecoration: 'none'}} to = "/features">
        <Nav.Link href="/features">Features</Nav.Link>
      </NavLink>
      <NavLink style = {{textDecoration: 'none'}} to = "/about">
        <Nav.Link href="/about">About Us</Nav.Link>
      </NavLink>

    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Search</Button>
      </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;