import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>About Us</h1>
            <p>Welcome to our platform! We are dedicated to providing the best services to our users.</p>
            <p>Our mission is to innovate and improve the way you interact with technology.</p>
            <h2>Our Team</h2>
            <p>We have a diverse team of experts who are passionate about technology and user experience.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us at <a href="mailto:info@cortexiumlabs.com">info@cortexiumlabs.com</a>.</p>
        </div>
    );
};

export default About;