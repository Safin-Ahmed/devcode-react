import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <Container className = "py-4">
            <Row className = "align-items-center">
                <Col>
                    <div>
                        <h2 className = "mb-3">Get more close with your courses</h2>
                        <p className = "mb-3">We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly</p>
                        <Row className = "gx-0">
                            <Col md={1}>
                                <img width="30" height= "30" src="http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="" />
                            </Col>
                            <Col>
                                <p>Detail description of each course</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md={1}>
                                <img width="30" height= "30" src="http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="" />
                            </Col>
                            <Col>
                                <p>Easy to understand language</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <img width="30" height= "30" src="http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="" />
                            </Col>
                            <Col>
                                <p>Simple and easy to learn courses.</p>
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col className = "text-center">
                    <img style = {{width: '60%'}} src="http://skilify.theuxuidesigner.com/images/webp/know-about.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Features;