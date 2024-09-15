// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
    <br></br>
    <br></br>
      <h1>About Us</h1>
      <p>
        Welcome to our application! Our mission is to provide users with the best possible experience 
        by offering a variety of services, including a chatbot, a language translator, and an FAQ 
        section that helps you quickly find answers to common questions.
      </p>
      <p>
        We are a dedicated team of developers passionate about building easy-to-use, intuitive software 
        that meets the needs of our users. Our services are designed to be mobile-friendly, responsive, 
        and accessible to a wide range of users.
      </p>
      <p>
        We value feedback and are constantly working to improve our platform. If you have any suggestions 
        or would like to know more about us, feel free to reach out!
      </p>
      <h2>Contact Us</h2>
      <p>Email: support@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  );
};

export default About;
