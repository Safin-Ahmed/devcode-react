import { Carousel } from 'bootstrap';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <> 
        <section className = "hero-section">
            <Container>
                <Row className = "align-items-center">
                    <Col md={6}>
                        <h2>Learn more and make success the result of perfection.</h2>
                        <p>Pick from over 100,000 online video courses with new additions published every month.</p>
                    </Col>
                    <Col style= {{zIndex: '99999'}} md={6}>
                        <img style = {{width: '60%'}} src="http://skilify.theuxuidesigner.com/images/webp/girl-img-study.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default HeroBanner;