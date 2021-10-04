import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import CourseCard from '../CourseCard/CourseCard';
import './HomeCourses.css';

const HomeCourses = () => {
    const loadCourses = useCourses();
    const [courses, setCourses] = loadCourses;
    const slicedCourses = courses.slice(0,4);
    return (
        <section style = {{padding: '50px 0'}} className = "home-courses-section">
            <Container>
                <Row className = "justify-content-between">
                    <Col>
                        <h2 style = {{marginBottom: "20px"}} className = "home-courses-title">
                            Get Choice of Your Course
                        </h2>
                    </Col>
                    <Col className = "view-btn-col">
                        <NavLink to = "/courses" className = "btn btn-success view-btn">View All</NavLink>
                    </Col>
                </Row>
                <Row className = "course-grid" xs={1} md={4} className="g-4">
                {
                    slicedCourses.map (course => <CourseCard course = {course}></CourseCard>)
                }
                </Row>
            </Container>
        </section>
    );
};

export default HomeCourses;