import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">DevCode</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Link className = "nav-link" style = {{textDecoration: 'none'}} to = "/">
        Home
      </Link>
      <Link className = "nav-link" style = {{textDecoration: 'none'}} to = "/courses">
        Courses
      </Link>
      <Link className = "nav-link" style = {{textDecoration: 'none'}} to = "/features">
        Features
      </Link>
      <Link className = "nav-link" style = {{textDecoration: 'none'}} to = "/about">
       About Us
      </Link>

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