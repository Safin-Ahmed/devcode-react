import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div style = {{padding: '50px 0'}} className = "about-section">
            <Container className = "text-center">
                <img className = "mb-5" src="https://about.udemy.com/wp-content/uploads/2021/07/about-us.png" alt="" />
                <h1 className = "text-center">Changing learning for the better</h1>
                <p className = "text-center">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
            </Container>

        </div>
    );
};

export default About;