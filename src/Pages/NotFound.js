import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div style = {{padding: '50px 0'}}>
            <Container className= "text-center">
                <h2 style = {{marginBottom : '30px'}}>404 Page Not Found !</h2>
                <img className="w-50" src="http://skilify.theuxuidesigner.com/images/webp/page404.png" alt="" />
            </Container>
        </div>
    );
};

export default NotFound;