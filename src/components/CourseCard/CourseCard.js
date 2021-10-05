import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './CourseCard.css';

const CourseCard = (props) => {
    const {name, mentorImg, courseImg, mentorName, price, rating, videos, views} = props.course;
    return (
     <Col>
      <Card>
        <Card.Img variant="top" src={courseImg} />
        <div style = {{borderBottom: '1px solid #eee', margin: 'auto', gap: '40px', padding: '10px 0'}} className = "d-flex justify-content-between align-items-center">
            <Col>
                <div className = "d-flex align-items-center"
                >
                    <img width = '24' height = '24' src="http://skilify.theuxuidesigner.com/images/svg/star.svg" alt="" />
                    <p style = {{marginBottom : '0'}}>{rating}</p>
                </div>
            </Col>
            
            <Col>
                <div className = "d-flex align-items-center"
                >
                    <img width = '24' height = '24' src="http://skilify.theuxuidesigner.com/images/svg/crd-view.svg" alt="" />
                    <p style = {{marginBottom : '0'}}>{views}</p>
                </div>
            </Col>
            <Col>
                <div className = "d-flex align-items-center"
                >
                    <img width = '24' height = '24' src="http://skilify.theuxuidesigner.com/images/svg/crd-play.svg" alt="" />
                    <p style = {{marginBottom : '0'}}>{videos}</p>
                </div>
            </Col>

        </div>
        <Card.Body>
          <Card.Title style = {{fontSize: '18px'}}>{name}</Card.Title>
          <Row className = "justify-content-between course-info">
            <Col md = {7}>
                <div className = "d-flex align-items-center"
                >
                    <img width = '24' height = '24' src={mentorImg} alt="" />
                    <p style = {{marginBottom : '0', marginLeft : '10px'}}>{mentorName}</p>
                </div>
            </Col>
            
            <Col className = "right" md = {5}>
                    <span className = "price">${price}</span> 
            </Col>

            </Row>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default CourseCard;