import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
       <footer className="bg-success text-white">
           <Container>
               <Row>
                   <Col md={3}>
                        <div className = "footer-menus">
                            <h5>Pages</h5>
                            <Nav className="m-auto d-block">
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/">
                                    Home
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/courses">
                                    Courses
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/features">
                                   Features
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/about-us">
                                   About Us
                                </NavLink>

                            </Nav>
                        </div>
                   </Col>
                   
                   <Col md={3}>
                        <div className = "footer-menus">
                            <h5>Courses</h5>
                            <Nav className="m-auto d-block">
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/">
                                    Home
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/courses">
                                    Courses
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/features">
                                   Features
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/about-us">
                                   About Us
                                </NavLink>

                            </Nav>
                        </div>
                   </Col>
                   <Col md={3}>
                        <div className = "footer-menus">
                            <h5>Features</h5>
                            <Nav className="m-auto d-block">
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/">
                                    Home
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/courses">
                                    Courses
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/features">
                                   Features
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/about-us">
                                   About Us
                                </NavLink>

                            </Nav>
                        </div>
                   </Col>
                   <Col md={3}>
                        <div className = "footer-menus">
                            <h5>Policy</h5>
                            <Nav className="m-auto d-block">
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/">
                                    Home
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/courses">
                                    Courses
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/features">
                                   Features
                                </NavLink>
                                <NavLink className = "nav-link" style = {{textDecoration: 'none'}} to = "/about-us">
                                   About Us
                                </NavLink>

                            </Nav>
                        </div>
                   </Col>

               </Row>
              <div className = "copyright-text text-center">
              <span className="copy-right-txt">© 2021 DevCode Limited. All rights reserved</span>
              </div>
           </Container>
       </footer>
    );
};

export default Footer;