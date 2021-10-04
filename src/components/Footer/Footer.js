import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
       <footer class="bg-success text-white">
           <Container>
               <Row>
                   <Col>
                        <div className = "footer-menus">
                            <h5>Pages</h5>
                            <Nav className="m-auto d-block">
                                <NavLink style = {{textDecoration: 'none'}} to = "/home">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/courses">
                                    <Nav.Link href="/courses">Courses</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/features">
                                    <Nav.Link href="/features">Features</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/about-us">
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                </NavLink>

    </Nav>
                        </div>
                   </Col>
                   
                   <Col>
                        <div className = "footer-menus">
                            <h5>Courses</h5>
                            <Nav className="m-auto d-block">
                                <NavLink style = {{textDecoration: 'none'}} to = "/home">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/courses">
                                    <Nav.Link href="/courses">Courses</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/features">
                                    <Nav.Link href="/features">Features</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/about-us">
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                </NavLink>

    </Nav>
                        </div>
                   </Col>
                   <Col>
                        <div className = "footer-menus">
                            <h5>Features</h5>
                            <Nav className="m-auto d-block">
                                <NavLink style = {{textDecoration: 'none'}} to = "/home">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/courses">
                                    <Nav.Link href="/courses">Courses</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/features">
                                    <Nav.Link href="/features">Features</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/about-us">
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                </NavLink>

    </Nav>
                        </div>
                   </Col>
                   <Col>
                        <div className = "footer-menus">
                            <h5>Policy</h5>
                            <Nav className="m-auto d-block">
                                <NavLink style = {{textDecoration: 'none'}} to = "/home">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/courses">
                                    <Nav.Link href="/courses">Courses</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/features">
                                    <Nav.Link href="/features">Features</Nav.Link>
                                </NavLink>
                                <NavLink style = {{textDecoration: 'none'}} to = "/about-us">
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                </NavLink>

    </Nav>
                        </div>
                   </Col>

               </Row>
              <div className = "copyright-text text-center">
              <span class="copy-right-txt">© 2021 DevCode Limited. All rights reserved</span>
              </div>
           </Container>
       </footer>
    );
};

export default Footer;