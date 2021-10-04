import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseCard from '../components/CourseCard/CourseCard';
import useCourses from '../hooks/useCourses';

const Courses = () => {
const loadCourse = useCourses();
const [courses, setCourses] = loadCourse;
    return (
        <Container className = "py-5">
            <h1 className = "text-center mb-5" >Courses</h1>
            <Row className = "course-grid" xs={1} md={4} className="g-4">
                {
                    courses.map (course => <CourseCard course = {course}></CourseCard>)
                }
            </Row>
        </Container>
    );
};

export default Courses;